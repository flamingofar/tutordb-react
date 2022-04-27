import React, { useState } from "react";
import POST from "../utils/fetch/POST";

function MakeEntry({ entries, setEntries }) {
	//? GET FORM INPUT
	const [semester, setSemester] = useState("1. Sem DK");
	const [online, setOnline] = useState(false);
	const [question, setQuestion] = useState("");

	function handleSelect(e) {
		setSemester(e.target.value);
	}
	function handleCheck(e) {
		setOnline(!online);
	}
	function handleTextArea(e) {
		setQuestion(e.target.value);
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(semester, online, question);

		const newDate = new Date();
		const day = newDate.getDate();
		const month = newDate.getMonth() + 1;
		const year = newDate.getFullYear();
		const date = `${day}/${month}/${year}`;

		const result = {
			semester: semester,
			question: question,
			online: online,
			date: date,
		};
		console.log(result);
		POST.postData(result)
			.then((response) => {
				console.log(response.data);
				setEntries((prev) => [...prev, response.data]);
				console.log(entries);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<main>
			<section className="data_box">
				<h1>Post question</h1>
				<form onSubmit={handleSubmit}>
					<div className="input_wrapper">
						<label htmlFor="in_semester">Semester</label>
						<select id="in_semester" onChange={handleSelect}>
							<option value="1. Sem DK" defaultValue={"---"}>
								1. Sem DK
							</option>
							<option value="2. Sem DK">2. Sem DK</option>
							<option value="1. Sem INT">1. Sem INT</option>
							<option value="2. Sem INT">2. Sem INT</option>
							<option value="Front-end">Front-end</option>
							<option value="Digital design">Digital design</option>
							<option value="DBC&M">DBC&M</option>
						</select>
					</div>

					<div className="input_wrapper">
						<label htmlFor="in_online">Online?</label>
						<input type="checkbox" id="in_online" checked={online} onChange={handleCheck} />
					</div>

					<div className="input_wrapper">
						<label htmlFor="in_desc">Description</label>
						<textarea id="in_desc" cols="1" required minLength="5" maxLength="200" placeholder="Description" onChange={handleTextArea}></textarea>
					</div>

					<div className="btn_container">
						<button>Post</button>
					</div>
				</form>
			</section>
		</main>
	);
}

export default MakeEntry;
