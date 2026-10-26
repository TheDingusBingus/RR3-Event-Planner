import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import "./App.css";



export default function App() {
  return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
		</Routes>
	)
}