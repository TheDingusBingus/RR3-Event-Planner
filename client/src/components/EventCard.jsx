import styles from "./EventCard.module.css";

export default function EventCard({ event }) {
    const date = new Date(event.event_date).toLocaleDateString("en-GB", {
        weekday: "short", day: "numeric", month: "short",
    });
    const time = event.event_time?.slice(0, 5); // "10:00:00+00" -> "10:00"

    const stats = [
        { label: "Booked", value: event.capacity != null ? `${event.booked} / ${event.capacity}` : event.booked },
        { label: "Predicted", value: event.predicted },
        { label: "Volunteers", value: event.volunteers_needed != null ? `${event.volunteers_booked} / ${event.volunteers_needed}` : null },
    ].filter((s) => s.value != null);

    return (
        <div className={styles.card}>
            <div>
                <h3 className={styles.venue}>{event.name}</h3>
                <p className={styles.meta}>{event.location} · {date}{time && `, ${time}`}</p>
            </div>
            <div className={styles.stats}>
                {stats.map((s) => (
                    <div key={s.label}>
                        <span className={styles.label}>{s.label}</span>
                        <span className={styles.value}>{s.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}