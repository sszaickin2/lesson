import { set } from "@firebase/database";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { getChatsRefById, getMessagesRefByChatId } from "../../services/firebase";
import { initChatsTracking } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import { FormMui } from "../FormMui";
import { ChatItem } from "./ChatItem";
import "./form.scss";

export const ChatList = () => {
	const chats = useSelector(selectChats);
	const dispatch = useDispatch();

	const handleAddChat = (newChatName) => {
		const newId = `chat-${Date.now()}`;
		set(getChatsRefById(newId), { id: newId, name: newChatName });
		set(getMessagesRefByChatId(newId), { empty: true });
	};

	useEffect(() => {
		dispatch(initChatsTracking());
	}, []);

	return (
		<>
			<div className="form">
				<FormMui onSubmit={handleAddChat} />
				<ul className="form-chat__list">{chats.map((chat) => (<ChatItem key={chat.id} chat={chat} />))}</ul>
				<Outlet />
			</div>
		</>
	);
};
