import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { addChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { FormMui } from "../FormMui";
import { ChatItem } from "./ChatItem";
import "./styles.scss"


export const ChatList = () => {
	const chats = useSelector(selectChats);
	const dispatch = useDispatch();

	const handleAddChat = (newChatName) => {
		const newId = `chat-${Date.now()}`;
		dispatch(addChat(newId, newChatName))
	}

	return (
		<>
			<section className="chat-list">
				<ul className="chat-list__list">
					<FormMui onSubmit={handleAddChat} />
					{chats.map((chat) => (
						<ChatItem chat={chat} />
					))}
				</ul>
				<Outlet />
			</section>
		</>
	)
};