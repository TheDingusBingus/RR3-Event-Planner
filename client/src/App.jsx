import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import EventInfomation from "./pages/EventInfo";



export default function App() {
  return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/events/:id" element={<EventInfomation />} />
		</Routes>
	)
}