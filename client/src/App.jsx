import EventsList from "./components/EventsList";
import { events } from "./data/SampleData";
import CheckIn from "./components/CheckIn";
import "./App.css";


function App() {
  return (
	<main>
	  <EventsList events={events}/>
	  <CheckIn />
	</main>
  );
}

export default App;
