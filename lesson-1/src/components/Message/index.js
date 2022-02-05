import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

export const Message = ({ text, author }) => {
	return (
		<div className="message">
			<div className="message__author">{author}:</div>
			<span className="message__text">{text}</span>
		</div>
	);
};

Message.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]),
	author: PropTypes.string.isRequired,
}