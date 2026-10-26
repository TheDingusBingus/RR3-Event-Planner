import { api } from './client.js'

const toEvent = (row) => ({
  id: row.id,
  name: row.name,
  location: row.location,
  booked: row.booked,
  date: row.event_date,
  time: row.event_time.slice(0, 5),
})

export const getEvents = async (options) =>
  (await api('/events', options)).map(toEvent)