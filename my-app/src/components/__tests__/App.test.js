import React from "react";
// import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "../App";
import { CommentBox, CommentList } from "../comments";

it("Shows a CommentBox", () => {
	//
	// === Old Way, NOT Using a Library ===
	// // We use JSDOM Library to "imitate" a DOM, creating elements
	// const myDiv = document.createElement("div");
	// // We muont our App HTML inside this DIV.
	// ReactDOM.render(<App></App>, myDiv);
	// //  === Test ===
	// // 1) See whats inside:
	// // console.log(myDiv.innerHTML);
	// // 2) Knowing what CommentBox shows, we can find it by it's content:
	// // NOT GOOD APPROACH.
	// // expect(myDiv.innerHTML).toContain("CommentBox");
	// // === End Test ===
	// // Unmount our App, for tests performance
	// ReactDOM.unmountComponentAtNode(myDiv);
	//
	// === Using Enzyme ===$
	const wrapped = shallow(<App></App>);
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("Shows a CommentList", () => {
	const wrapped = shallow(<App></App>);
	expect(wrapped.find(CommentList).length).toEqual(1);
});
