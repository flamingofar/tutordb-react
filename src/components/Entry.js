function Entry({ date, online, question, semester }) {
	return (
		<tbody>
			<tr>
				<td className="sem">{semester}</td>
				<td className="question">{question}</td>
				<td className="online">{online ? "Yes" : "-"}</td>
				<td className="physical">{online ? "-" : "Yes"}</td>
				<td className="date">{date}</td>
			</tr>
		</tbody>
	);
}

export default Entry;
