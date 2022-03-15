import React from "react";

import { VideoItem } from "./";

const VideoList = ({ myList, onVideoSelect }) => {
	const renderedList = myList.map((singleVideo) => {
		return (
			<VideoItem
				key={singleVideo.id.videoId}
				onVideoSelect={onVideoSelect}
				myVid={singleVideo}
			></VideoItem>
		);
	});

	return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
