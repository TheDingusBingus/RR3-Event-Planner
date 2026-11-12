import { Router } from 'express';
import { supabase } from '../supabase.js';

const router = Router()

const cols = 'id, name, location, event_date, event_time, booked, capacity, predicted, volunteers_needed, volunteers_booked' 

router.get('/', async (req, res) => {
  const { data, error } = await supabase 
    .from('events_legacy') 
    .select(cols)
    .order ('event_date', { ascending: true })
    .order ('event_time', { ascending: true })

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

router.get('/:id', async (req, res) => {
  const id = Number (req.params.id)
  if (!Number.isInteger(id)) {
    return res.status(400).json({error: 'event ID NaN'})
  }

  const { data, error } = await supabase 
    .from('events_legacy') 
    .select(cols)
    .eq('id', id)
    .single()

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

router.get('/api/events/:eventId/attendees', async (req, res) => {
  const { data, error } = await supabase
    .from('event_attendees')
    .select(`
      attended,
      attendees (
        attendee_id,
        attendee_name,
        attendee_requirements ( dietary_requirements ( requirement_name ) )
      )
    `)
    .eq('event_id', req.params.eventId);

  if (error) return res.status(500).json({ error: error.message });

  res.json(
    data.map((row) => ({
      id: row.attendees.attendee_id,
      name: row.attendees.attendee_name,
      dietary: row.attendees.attendee_requirements.map(
        (r) => r.dietary_requirements.requirement_name
      ),
      arrived: row.attended,
    }))
  );
});

router.patch('/api/events/:eventId/attendees/:attendeeId', async (req, res) => {
  const { data, error } = await supabase
    .from('event_attendees')
    .update({ attended: req.body.arrived })
    .eq('event_id', req.params.eventId)
    .eq('attendee_id', req.params.attendeeId)
    .select();

  if (error) return res.status(500).json({ error: error.message });
  if (!data.length) return res.status(404).json({ error: 'Not found' });
  res.json({ ok: true });
});

export default router