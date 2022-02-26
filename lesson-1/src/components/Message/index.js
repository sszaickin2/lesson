import "./styles.scss";

export const Message = ({ text, author }) => {
	return (
		<div className="text-chat">
			<span className="text-chat__author">{author}:</span>
			<span className="text-chat__info">{text}</span>
		</div>
	);
};