import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import { addChat, deleteChat } from "../../store/chats/actions";
import { addMessage } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";
import { ThemeContext } from "../../utils/ThemeContex";
import { Chat } from '../Chat';
import { ChatList } from "../ChatList";
import { Profile } from "../Profile";
import "./styles.scss"

const Home = () => <h2>Home</h2>;


export const Router = () => {

	const [messageColor, setMessageColor] = useState('blue');
	const messages = useSelector(selectMessages);

	const chatList = useSelector(state => state.chats);
	const dispatch = useDispatch();

	const handleAddMessage = (chatId, newMsg) => {
		dispatch(addMessage(chatId, newMsg));
	}

	const handleAddChat = (newChatName) => {
		const newId = `chat-${Date.now()}`;
		dispatch(addChat(newId, newChatName))
	}

	const handleDeleteChat = (idToDelete) => {
		dispatch(deleteChat(idToDelete));
	}

	const contextValue = {
		messageColor,
		setMessageColor,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			<div className="App">
				<BrowserRouter>
					<header className="menu">
						<span><NavLink className="menu__link" style={({ isActive }) => ({ color: isActive ? '#AA4B41' : '#D4DDE1' })} to="/">Home</NavLink></span>
						<span><NavLink className="menu__link" style={({ isActive }) => ({ color: isActive ? '#AA4B41' : '#D4DDE1' })} to="chats">Chats</NavLink></span>
						<span><NavLink className="menu__link" style={({ isActive }) => ({ color: isActive ? '#AA4B41' : '#D4DDE1' })} to="/profile">Profile</NavLink></span>
					</header>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile changeColor={setMessageColor} />} />
						<Route path="chats" element={<ChatList onDeleteChat={handleDeleteChat} onAddChat={handleAddChat} chats={chatList} />}>
							<Route path=":chatId" element={<Chat messages={messages} addMessage={handleAddMessage} />} />
						</Route>
						<Route path="*" element={<h2>404</h2>} />
					</Routes>
				</BrowserRouter>
			</div>
		</ThemeContext.Provider>
	);
};