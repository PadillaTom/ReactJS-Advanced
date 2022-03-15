import React, { Component } from "react";

import { SearchBar } from "./SearchBar";
import { VideoList } from "./VideoList";
import { VideoDetails } from "./VideoDetails";

import youtubeAPI from "../APIs/youtubeAPI";

export default class App extends Component {
	state = {
		myVideos: [],
		selectedVideo: null,
	};

	componentDidMount() {
		this.onTermSubmit("Renata Support");
	}

	// Methods:
	onTermSubmit = async (term) => {
		const response = await youtubeAPI.get("/search", {
			params: {
				q: term,
			},
		});

		this.setState({
			myVideos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({
			selectedVideo: video,
		});
	};

	// Render:
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>
				<div className="ui grid">
					<div className="ui row">
						<div className="ten wide column">
							<VideoDetails
								currentVideo={this.state.selectedVideo}
							></VideoDetails>
						</div>
						<div className="six wide column">
							<VideoList
								myList={this.state.myVideos}
								onVideoSelect={this.onVideoSelect}
							></VideoList>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
