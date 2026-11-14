import { Router } from 'express';
import { supabase } from '../supabase.js';

const router = Router();

/**
 * GET /
 * Returns a summary analysis of all events plus the raw event list.
 *
 * Analysis includes:
 * - Total number of events
 * - Booked vs unbooked counts
 * - Events grouped by location
 * - Upcoming vs past events (based on today's date)
 
 */
router.get('/', async (req, res) => {
  const { data, error } = await supabase
    .from('events')
    .select('*')
  

  if (error) return res.status(500).json({ error: error.message });

  const { data: dietary, error: dietaryError, } = await supabase
    .from('dietary_requirements')
    .select('*');

  if (dietaryError) return res.status(500).json({ error: dietaryError.message });

  //Gets total events
  const totalEvents = data.length;

  // Booked vs Unbooked events  
  const bookedCount = data.filter(event => event.booked === true).length;
  const unbookedCount = totalEvents - bookedCount;

  // Events per location
  const byLocation = {};
  data.forEach(event => {
    const location = event.location || 'Unknown';
    byLocation[location] = (byLocation[location] || 0) + 1;
  });

  // Upcoming vs past (compares event_date with today's date)
  const today = new Date().toISOString().split('T')[0];
  const upcomingCount = data.filter(event => event.event_date >= today).length;
  const pastCount = totalEvents - upcomingCount;

  // --Dietary analysis--
  const totalDietary = dietary.length;

  // Group dietary requirements by type
  const dietaryByType = {};
  dietary.forEach(item => {
    const type = item.requirement_name || 'Unknown';
    dietaryByType[type] = (dietaryByType[type] || 0) + 1;
  });

  // Response
  res.json({
    summary: {
      totalEvents,
      bookedCount,
      unbookedCount,
      upcomingCount,
      pastCount,
      byLocation,
      totalDietary,
      dietaryByType
    },
    events: data,
    
    
   
  });
});

export default router;