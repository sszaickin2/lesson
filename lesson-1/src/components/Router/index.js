import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

import { ThemeContext } from "../../utils/ThemeContext";
import { Articles } from "../Articles/Articles";
import { Chat } from "../Chat";
import { ChatList } from "../ChatList";
import { Home } from "../Home/Home";
import { PrivateRoute } from "../PrivateRoute/PrivateRoute";
import ConnectedProfile from "../Profile";
import { PublicRoute } from "../PublicRoute/PublicRoute";
import { auth } from "../../services/firebase";
import "./router.scss"

export const Router = () => {
	const [messageColor, setMessageColor] = useState("red");
	const [authed, setAuthed] = useState(false);

	const unauthorize = () => {
		setAuthed(false);
	};

	const contextValue = {
		messageColor,
		setMessageColor,
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthed(true);
			} else {
				setAuthed(false);
			}
		});

		return unsubscribe;
	}, []);

	return (
		<ThemeContext.Provider value={contextValue}>
			<BrowserRouter>

				<div className="menu">
					<NavLink className="menu__link" to="/">Home</NavLink>
					<NavLink className="menu__link" to="/profile">Profile</NavLink>
					<NavLink className="menu__link" to="/chats">Chats</NavLink>
					<NavLink className="menu__link" to="/articles">Articles</NavLink>
				</div>


				<Routes>

					<Route path="/" element={<PublicRoute authed={authed} />}>
						<Route path="" element={<Home />} />
						<Route path="/signup" element={<Home isSignUp />} />
					</Route>

					<Route path="/profile" element={<PrivateRoute authed={authed} />}>
						<Route path="" element={<ConnectedProfile onLogout={unauthorize} />} />
					</Route>

					<Route path="chats" element={<ChatList />}>
						<Route path=":chatId" element={<Chat />} />
					</Route>

					<Route path="/articles" element={<Articles />} />
					<Route path="*" element={<h2>404</h2>} />

				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};