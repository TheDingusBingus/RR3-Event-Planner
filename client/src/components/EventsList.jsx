import EventCard from "./EventCard.jsx";
import { Link } from "react-router";
import { Button } from "./ui/button";

function EventsList({ events }) {
    return (
        <section>
            <h1 className="text-lg">Upcoming Events</h1>
            {events.map((event) => (

                
                <div key={event.id} className="mb-2">
                <EventCard  event={event} />
            
                <Button
                    variant="outline"
                    size="lg"
                    className="w-full"
                    nativeButton={false}
                    render={<Link to={`/events/${event.id}`} />}
                >Open Event</Button>

            </div>
            ))}
        </section>

    )
}

export default EventsList;

