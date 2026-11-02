import { api } from './client.js'

const toEvent = (row) => ({
  id: row.id,
  name: row.name,
  location: row.location,
  booked: row.booked,
  date: row.event_date,
  time: row.event_time.slice(0, 5),
  capacity: row.capacity,
  predicted: row.predicted,
  volunteersNeeded: row.volunteersNeeded,
  volunteersBooked: row.volunteersBooked,
})


// get all events
export const getEvents = async (options) =>
  (await api('/events', options)).map(toEvent)

// get event via id
export const getEvent = async (id, options) => {
  console.log('getEvent args:', id, options)
  return toEvent(await api(`/events/${id}`, options))
}