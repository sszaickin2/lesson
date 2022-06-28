import React from "react";
import "./styles.scss";

export const Message = ({ text, author }) => {
	return (
		<div className="text-chat">
			<span className="text-chat__author">{author}: {text}</span>
			{/* <span className="text-chat__info"></span> */}
		</div>
	);
};

