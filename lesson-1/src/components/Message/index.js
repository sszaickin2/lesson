import React from "react";
import "./styles.scss"


export class Message extends React.Component {
	render() {
		const { text, author } = this.props;
		return (
			<span className="heading">
				{author}:
				<span className="heading__text">{text}</span>
			</span>
		);
	}
}