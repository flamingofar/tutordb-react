import { useLocation } from "react-router-dom";

function Details(props) {
	const location = useLocation();
	const stateData = location.state;
	console.log(stateData);
	const data = {
		sem1DK: stateData.filter((el) => el.semester.toLowerCase() === "1. sem dk"),
		sem2DK: stateData.filter((el) => el.semester.toLowerCase() === "2. sem dk"),
		sem1INT: stateData.filter((el) => el.semester.toLowerCase() === "1. sem int"),
		sem2INT: stateData.filter((el) => el.semester.toLowerCase() === "2. sem int"),
		frontend: stateData.filter((el) => el.semester.toLowerCase() === "front-end" || el.semester.toLowerCase() === "3. sem dk"),
		digitalDesign: stateData.filter((el) => el.semester.toLowerCase() === "digital design"),
		sem4: stateData.filter((el) => el.semester.toLowerCase() === "webdev 1.sem"),
		online: stateData.filter((el) => el.online === true),
	};
	console.log(data);

	return (
		<main>
			<section className="data_box">
				<h1>Stats</h1>
				<table>
					<thead>
						<tr>
							<th>DK</th>
							<th>INT</th>
							<th>Online</th>
							<th>Physical</th>
							<th>Total</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{data.sem1DK.length + data.sem2DK.length + data.digitalDesign.length}</td>
							<td>{data.sem1INT.length + data.sem2INT.length + data.frontend.length + data.sem4.length}</td>
							<td>{data.online.length}</td>
							<td>{stateData.length - data.online.length}</td>
							<td>{stateData.length}</td>
						</tr>
					</tbody>
				</table>
				<table>
					<thead>
						<tr>
							<th>1. Sem DK</th>
							<th>2. Sem DK</th>
							<th>1. Sem INT</th>
							<th>2. Sem INT</th>
							<th>3. Sem Frontend</th>
							<th>3. Sem Digital Design</th>
							<th>4. Sem</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>{data.sem1DK.length}</td>
							<td>{data.sem2DK.length}</td>
							<td>{data.sem1INT.length}</td>
							<td>{data.sem2INT.length}</td>
							<td>{data.frontend.length}</td>
							<td>{data.digitalDesign.length}</td>
							<td>{data.sem4.length}</td>
						</tr>
					</tbody>
				</table>
			</section>
		</main>
	);
}

export default Details;
