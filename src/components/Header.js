import Nav from "./Nav";

function Header({ entries, setEntries }) {
	return (
		<header>
			<div>
				<h1>Tutor DB</h1>
			</div>
			<Nav entries={entries} setEntries={setEntries} />
			<div>2022</div>
		</header>
	);
}

export default Header;
