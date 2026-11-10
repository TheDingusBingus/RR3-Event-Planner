import { useState } from "react";
import { Button } from "./ui/button"

export default function CheckIn() {
    const [people, setPeople] = useState([
        {id: 1, name: 'Jaedyn Wong', dietary: '', arrived: false},
        {id: 2, name: 'John Doe', dietary: 'Nut Allergy', arrived: false},
        {id: 3, name: 'Jane Smith', dietary: 'Halal', arrived: true},
        {id: 4, name: 'Alice Johnson', dietary: 'Vegetarian', arrived: false},

]);

function toggle(id) {
    setPeople(
        people.map((p) => (p.id === id ? { ...p, arrived: !p.arrived } : p))
    );
}

const arrived = people.filter((p) => p.arrived).length;

return (
    <div>
        <h1>Check In</h1>
        <p>Arrived: {arrived} / {people.length}</p>

        <ul>
            {people.map((p) => (
                <li key={p.id}>
                    <span>{p.name} {p.dietary && `(${p.dietary})`}</span>
                    <Button
                        size = "sm"
                        onClick={() => toggle(p.id)}>
                        {p.arrived ? 'Undo' : 'Arrived'}
                    </Button>
                </li>
            ))}
        </ul>
    </div>
);
}
