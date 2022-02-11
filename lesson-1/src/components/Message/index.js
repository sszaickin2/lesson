import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { ThemeContext } from "../../utils/ThemeContex";

export const Message = ({ text, author }) => {
	const { messageColor } = useContext(ThemeContext)

	return (
		<div className="message">
			<span className="message__author">{author}:</span>
			<span style={{ color: messageColor }} className="message__text">{text}</span>
		</div>
	);
};

Message.propTypes = {
	text: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number]),
	author: PropTypes.string.isRequired,
}