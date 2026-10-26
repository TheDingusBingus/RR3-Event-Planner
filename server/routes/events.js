import { Router } from 'express';
import { supabase } from '../supabase.js';

const router = Router()

router.get('/', async (req, res) => {
  const { data, error } = await supabase 
    .from('events') 
    .select('id, name, location, event_date, event_time, booked')
    .order ('event_date', { ascending: true })
    .order ('event_time', { ascending: true })

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

export default router