import { Message } from "../Message";

export const MessageList = ({ messages }) => {
	return messages.map((message) => (
		<Message
			text={message.text}
			author={message.author}
			key={message.id}
		/>
	));
}
