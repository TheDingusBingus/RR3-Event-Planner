import { useParams } from 'react-router'
import { getEvent } from '../api/events.js'
import { useFetch } from '../hooks/useFetch.js'
import EventCard from '../components/EventCard.jsx'
import CheckIn from '../components/CheckIn.jsx'

export default function EventInfomation() {
  const { id } = useParams() // use id param from URL
  const { data: event, loading, error } = useFetch(
    (opts) => getEvent(id, opts),
    [id]
  )

  if (loading) return <p>Loading event...</p>
  if (error) return <p>Could not load event: {error}</p>

  return (
    <>
      <EventCard event = {event} />
      <CheckIn eventId = {event.id}/>
      
    </>
  )
}
