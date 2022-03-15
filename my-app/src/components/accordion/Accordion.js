import React, { useState } from "react";

const Accordion = ({ myItems }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	// Methods:
	const onTitleClick = (myIndex) => {
		setActiveIndex(myIndex);
	};

	const renderedItems = myItems.map((singleItem, index) => {
		const isActive = index === activeIndex ? " active" : " ";
		return (
			<React.Fragment key={singleItem.title}>
				<div
					className={"title" + isActive}
					onClick={() => {
						onTitleClick(index);
					}}
				>
					<i className="dropdown icon"></i>
					{singleItem.title}
				</div>
				<div className={"content" + isActive}>
					<p>{singleItem.content}</p>
				</div>
			</React.Fragment>
		);
	});

	return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
