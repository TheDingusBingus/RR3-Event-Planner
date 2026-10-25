import EventsList from "./components/EventsList";
import { events } from "./data/SampleData";
import "./App.css";


function App() {
  return (
	<main>
	  <EventsList events={events}/>
	</main>
  );
}

export default App;
