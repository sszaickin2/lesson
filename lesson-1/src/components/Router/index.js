import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import { ThemeContext } from "../../utils/ThemeContex";
import { Articles } from "../Articles/Articles";
import { Chat } from '../Chat';
import { ChatList } from "../ChatList";
import { Profile } from "../Profile";
import "./styles.scss"

const Home = () => <h2>Home</h2>;


export const Router = () => {

	const [messageColor, setMessageColor] = useState('blue');

	const contextValue = {
		messageColor,
		setMessageColor,
	};

	return (
		<ThemeContext.Provider value={contextValue}>
			<div className="App">
				<BrowserRouter>
					<header className="menu">
						<span>
							<NavLink className="menu__link" style={({ isActive }) => ({ color: isActive ? '#AA4B41' : '#D4DDE1' })} to="/">Home</NavLink>
						</span>
						<span>
							<NavLink className="menu__link" style={({ isActive }) => ({ color: isActive ? '#AA4B41' : '#D4DDE1' })} to="chats">Chats</NavLink>
						</span>
						<span>
							<NavLink className="menu__link" style={({ isActive }) => ({ color: isActive ? '#AA4B41' : '#D4DDE1' })} to="/profile">Profile</NavLink>
						</span>
						<span>
							<NavLink className="menu__link" style={({ isActive }) => ({ color: isActive ? '#AA4B41' : '#D4DDE1' })} to="/Articles">Articles</NavLink>
						</span>
					</header>

					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Articles" element={<Articles /> } />
						<Route path="/profile" element={<Profile changeColor={setMessageColor} />} />
						<Route path="chats" element={<ChatList />}>
							<Route path=":chatId" element={<Chat />} />
						</Route>
						<Route path="*" element={<h2>404</h2>} />
					</Routes>
				</BrowserRouter>
			</div>
		</ThemeContext.Provider>
	);
};