import { Outlet } from "react-router-dom";
import { FormMui } from "../FormMui";
import { ChatItem } from "./ChatItem";
import "./styles.scss"


export const ChatList = ({ chats, onAddChat, onDeleteChat }) => (
	<>
		<section className="chat">
			<ul className="chat__list">
			<FormMui onSubmit={onAddChat} />
				{chats.map((chat) => (
					<ChatItem chat={chat} onDeleteChat={onDeleteChat} />
				))}
			</ul>
			<Outlet />
		</section>
	</>
);