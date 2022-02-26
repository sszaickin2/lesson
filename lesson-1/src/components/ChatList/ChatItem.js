import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import "./form.scss";


export const ChatItem = ({ chat, onDeleteChat }) => (
	<li className="form-chat__item" key={chat.id}>
		<Link className="form-chat__link" to={`/chats/${chat.id}`}>{chat.name}</Link>
		<DeleteButton id={chat.id} />
	</li>
);
