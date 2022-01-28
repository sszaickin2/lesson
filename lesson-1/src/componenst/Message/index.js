import React from "react";
import "./styles.scss"


export class Message extends React.Component {
	render() {
		const { text } = this.props;
		return (
			<h3 className="heading">
				Message Text,
				<span className="heading__text">{text}</span>
			</h3>
		);
	}
}