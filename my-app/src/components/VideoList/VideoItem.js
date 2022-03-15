import React from "react";
import "./VideoItem.css";

const VideoItem = ({ myVid, onVideoSelect }) => {
	return (
		<div
			className="video-item item"
			onClick={() => {
				onVideoSelect(myVid);
			}}
		>
			<img
				className="ui image"
				src={myVid.snippet.thumbnails.medium.url}
				alt={myVid.snippet.title}
			/>
			<div className="content">
				<div className="header">{myVid.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
