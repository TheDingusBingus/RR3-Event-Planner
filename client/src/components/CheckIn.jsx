import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardTitle, CardContent, CardDescription, CardHeader } from "./ui/card";

export default function CheckIn({ eventId }) {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch(`/api/events/${eventId}/attendees`)
      .then((res) => res.json())
      .then(setPeople)
      .catch(console.error);
  }, [eventId]);

  async function toggle(id, arrived) {
    await fetch(`/api/events/${eventId}/attendees/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ arrived: !arrived }),
    });
    setPeople((prev) =>
      prev.map((p) => (p.id === id ? { ...p, arrived: !arrived } : p))
    );
  }

  const arrived = people.filter((p) => p.arrived).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Check In</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Arrived: {arrived} / {people.length}</CardDescription>
        <ul>
          {people.map((p) => (
            <li key={p.id}>
              <span>
                {p.name} {p.dietary.length > 0 && `(${p.dietary.join(", ")})`}
              </span>
              <Button size="sm" onClick={() => toggle(p.id, p.arrived)}>
                {p.arrived ? "Undo" : "Arrived"}
              </Button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}