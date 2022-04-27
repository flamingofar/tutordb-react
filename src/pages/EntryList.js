import Entry from "../components/Entry";
import { useLocation } from "react-router-dom";

function EntryList(props) {
	const location = useLocation();
	const stateData = location.state;
	return (
		<>
			<section className="cards">
				<h2>Entries</h2>
				<article>
					<table>
						<thead>
							<tr>
								<th>Semester</th>
								<th>Question</th>
								<th>Online</th>
								<th>Physical</th>
								<th>Date</th>
							</tr>
						</thead>
						{stateData.map((entry) => {
							return <Entry key={entry._id} {...entry} />;
						})}
					</table>
				</article>
			</section>
		</>
	);
}

export default EntryList;
