import { Router } from 'express';
import { supabase } from '../supabase.js';

const router = Router()

const cols = 'id, name, location, event_date, event_time, booked, capacity, predicted, volunteers_needed, volunteers_booked' 

router.get('/', async (req, res) => {
  const { data, error } = await supabase 
    .from('events') 
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
    .from('events') 
    .select(cols)
    .eq('id', id)
    .single()

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router