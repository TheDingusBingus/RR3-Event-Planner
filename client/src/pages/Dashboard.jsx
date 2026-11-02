import EventsList from '../components/EventsList.jsx'
import { getEvents } from '../api/events.js'
import { useFetch } from '../hooks/useFetch.js'

export default function Dashboard() {
  const { data: events, loading, error } = useFetch(getEvents)

  if (loading) return <p>Loading events...</p>
  if (error) return <p>Could not load events: {error}</p>

  return (
    <>
      <EventsList
        events={events}
        onSelectEvent={(event) => console.log(event)} />
    </>
  )
}
