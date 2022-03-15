import React from "react";

import { Accordion } from "../accordion";
import { Search } from "../search";

const items = [
	{
		title: "What is React?",
		content: "asdasdasd",
	},
	{
		title: "What is JSX?",
		content: "asdasdasd",
	},
	{
		title: "What is Angular?",
		content: "asdasdasd",
	},
];

const App = () => {
	return (
		<div>
			{/* <Accordion myItems={items}></Accordion> */}
			<Search></Search>
		</div>
	);
};

export default App;
