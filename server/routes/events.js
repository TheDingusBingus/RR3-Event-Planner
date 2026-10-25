import { supabase } from '../supabase.js';

const { data, error } = await supabase.from('events').select('*');

if (error) throw error;