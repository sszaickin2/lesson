import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import { Chat } from '../Chat';
import { ChatList } from "../ChatList";
import "./styles.scss"

const Home = () => <h2>Home</h2>

export const Router = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<header className="menu">
					<span><NavLink className="menu__link" style={({ isActive }) => ({ color: isActive ? '#AA4B41' : '#D4DDE1' })} to="/">Home</NavLink></span>
					<span><NavLink className="menu__link" style={({ isActive }) => ({ color: isActive ? '#AA4B41' : '#D4DDE1' })} to="chats">Chats</NavLink></span>
				</header>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="chats" element={<ChatList />}>
						<Route path=":chatId" element={<Chat />} />
					</Route>
					<Route path="*" element={<h2>404</h2>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};