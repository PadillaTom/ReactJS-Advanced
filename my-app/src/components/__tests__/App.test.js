import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { CommentBox } from "../comments";

it("Shows a CommentBox", () => {
	// We use JSDOM Library to "imitate" a DOM, creating elements
	const myDiv = document.createElement("div");
	// We muont our App HTML inside this DIV.
	ReactDOM.render(<App></App>, myDiv);

	//  === Test ===
	// 1) See whats inside:
	// console.log(myDiv.innerHTML);

	// 2) Knowing what CommentBox shows, we can find it by it's content:
    // NOT GOOD APPROACH.
	// expect(myDiv.innerHTML).toContain("CommentBox");

    // 3) To see if it has an instance of:


	// === End Test ===

	// Unmount our App, for tests performance
	ReactDOM.unmountComponentAtNode(myDiv);
});
