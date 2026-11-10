import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "./ui/card";


export default function EventCard({ event }) {
    const date = new Date(event.date).toLocaleDateString("en-GB", {
        weekday: "short", day: "numeric", month: "short",
    });

    const stats = [
        { label: "Booked", value: event.capacity != null ? `${event.booked} / ${event.capacity}` : event.booked },
        { label: "Predicted", value: event.predicted },
        { label: "Volunteers numbers", value: event.volunteers_needed != null ? `${event.volunteers_booked_sum} / ${event.volunteers_needed}` : null },
        { label: "Volunteer ID's", value: event.volunteers_booked?.join(", ") || null},
    ].filter((s) => s.value != null);

    return (
        <Card>
            <CardHeader>
                <CardTitle>{event.name}</CardTitle>
                <CardDescription>{event.location} · {date}{event.time && `, ${event.time}`}</CardDescription>
            </CardHeader>

            <CardContent className={"flex flex-wrap justify-between gap-2"}>
                {stats.map((s) => (
                    <div key={s.label}>
                        <p className={"text-sm"}>{s.label}</p>
                        <p className={"text-lg"}>{s.value}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}