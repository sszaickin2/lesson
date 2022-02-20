import { Link } from "react-router-dom"
import { DeleteButton } from "./DeleteButton"

export const ChatItem = ({ chat, onDeleteChat }) => (
	<li className='chat-list__item' key={chat.id}>
	  <Link className='chat-list__link' to={`/chats/${chat.id}`}>{chat.name}</Link>
	  <DeleteButton id={chat.id} />
	</li>
 );