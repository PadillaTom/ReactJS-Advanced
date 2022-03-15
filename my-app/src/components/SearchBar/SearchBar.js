import React, { Component } from "react";

export default class SearchBar extends Component {
	state = {
		term: "",
	};

	// Methods:
	onInputChange = (event) => {
		this.setState({
			term: event.target.value,
		});
	};
	onFormSubmit = (e) => {
		e.preventDefault();
		// Parent's Method:
		this.props.onFormSubmit(this.state.term);
	};

	// Render:
	render() {
		return (
			<div className=" search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label htmlFor="video">Video Search</label>
						<input
							type="text"
							name="video"
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}
