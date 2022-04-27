import axios from "axios";

const GET = {
	getData: () =>
		axios({
			async: true,
			crossDomain: true,
			url: "https://tutor-26c9.restdb.io/rest/tutor-statestik",
			method: "GET",
			headers: {
				"content-type": "application/json",
				"x-apikey": "6216196f34fd62156585893d",
				"cache-control": "no-cache",
			},
		}),
};

export default GET;
