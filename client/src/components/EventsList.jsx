function EventsList({ events, onSelectEvent }) {
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
                    <button onClick={() => onSelectEvent(event)}>View Details</button>
                </article>
            ))}
        </section>
    );
}

export default EventsList;

