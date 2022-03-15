// This file will be an AXIOS instance. We can call it directily by its name and
// AXIOS methods.
import axios from "axios";

const API_KEY = "AIzaSyDgiogpmlVfF0BDa6q_Ka1EhA7vR5gLZrk";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: API_KEY,
	},
});
