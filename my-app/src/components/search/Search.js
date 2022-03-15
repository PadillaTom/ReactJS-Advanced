import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [term, setTerm] = useState("Java");
	const [results, setResults] = useState([]);

	useEffect(() => {
		const mySearch = async () => {
			const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
				params: {
					action: "query",
					list: "search",
					origin: "*",
					format: "json",
					srsearch: term,
				},
			});
			setResults(data.query.search);
		};

		mySearch();
	}, [term]);

	console.log(results);
	return (
		<div className="">
			<div className="ui form">
				<div className="field">
					<label htmlFor="">Search...</label>
					<input
						type="text"
						className="input"
						value={term}
						onChange={(e) => {
							setTerm(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Search;
