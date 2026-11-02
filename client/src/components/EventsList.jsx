import { Link } from "react-router";

function EventsList({ events }) {
    return (
        <section>
            <h2>Upcoming Events</h2>

            {events.map((event) => (
                <article key={event.id} className="event-card">
                    <h3>{event.name}</h3>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                    <p>Location: {event.location}</p>
                    <p>Booked: {event.booked}</p>
                    <Link to={`/events/${event.id}`}>View Details</Link>
                </article>
            ))}
        </section>
    );
}

export default EventsList;

