import styles from "./EventCard.module.css";

export default function EventCard({ event }) {
    const date = new Date(event.date).toLocaleString("en-GB", {
        weekday: "short", day: "numeric", month: "short",
        hour: "2-digit", minute: "2-digit",
    });

    return (
        <div className={styles.card}>
            <div>
                <h3 className={styles.venue}>{event.venue}</h3>
                <p className={styles.meta}>{date} · {event.mealType}</p>
            </div>
            <div className={styles.stats}>
                <div>
                    <span className={styles.label}>Booked</span>
                    <span className={styles.value}>{event.booked} / {event.capacity}</span>
                </div>
                <div>
                    <span className={styles.label}>Predicted</span>
                    <span className={styles.value}>{event.predicted}</span>
                </div>
                <div>
                    <span className={styles.label}>Volunteers</span>
                    <span className={styles.value}>{event.volunteersBooked} / {event.volunteersNeeded}</span>
                </div>
            </div>
        </div>
    );
}