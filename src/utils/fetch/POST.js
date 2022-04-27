import axios from "axios";

const POST = {
	streamDb: (state) => {
		const apikey = "6216196f34fd62156585893d";
		const eventSource = new EventSource(`https://tutor-26c9.restdb.io/realtime?apikey=${apikey}`);
		console.log(eventSource);
		eventSource.addEventListener(
			"post",
			(e) => {
				const jsonData = [JSON.parse(e.data).data];
				state((prev) => [...prev, ...jsonData]);
			},
			false
		);
	},
	postData: (payload) =>
		axios.post("https://tutor-26c9.restdb.io/rest/tutor-statestik", payload, {
			headers: {
				"content-type": "application/json",
				"x-apikey": "6216196f34fd62156585893d",
				"cache-control": "no-cache",
			},
		}),
};

export default POST;
