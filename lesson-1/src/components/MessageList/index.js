import { Message } from "../Message";
import { useParams } from "react-router"
import { useDispatch } from "react-redux"
import { deleteMessage, editMessage } from "../../store/messages/actions";
import "./styles.scss"

export const MessageList = ({ messages }) => {
	const { chatId } = useParams();
	const dispatch = useDispatch();

	const handleDelete = (id) => {
		dispatch(deleteMessage(chatId, id));
	};

	const handleEdit = (id) => {
		dispatch(editMessage(chatId, id, "edited"));
	}

	return messages.map((message) => (
		<div className="msg" key={message.id}>
			<Message className="msg__text" text={message.text} author={message.author} />
			<button className="msg__button" type="button" onClick={() => handleDelete(message.id)}>Delete</button>
			<button className="msg__button" type="button" onClick={() => handleEdit(message.id)}>Edit</button>
		</div>
	));
}
