import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import GET from "./utils/fetch/GET";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import EntryList from "./pages/EntryList";
import MakeEntry from "./pages/MakeEntry";

function App() {
	const [entries, setEntries] = useState([]);

	// Fetch data
	useEffect(() => {
		GET.getData()
			.then((response) => {
				setEntries(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			<Router>
				<Header entries={entries} setEntries={setEntries} />
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="entries" element={<EntryList />} />
					<Route path="details" element={<Details />} />
					<Route path="makeentry" element={<MakeEntry entries={entries} setEntries={setEntries} />} />
				</Routes>
			</Router>
			Home
		</>
	);
}

export default App;
