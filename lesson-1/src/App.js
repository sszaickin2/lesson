import React, { useEffect, useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Form } from './components/Form';
import { AUTHORS } from './utils/constants';
import { MessageList } from './components/MessageList';


function App() {
	const [messageList, setMessageList] = useState([]);

	const handleAddMessage = (text) => {
		sendMessage(text, AUTHORS.ME)
	};

	const sendMessage = (text, author) => {
		const newMsg = {
			text,
			author,
		}
		setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
	}

	useEffect(() => {
		let timeout;
		if (messageList[messageList.length - 1]?.author === AUTHORS.ME) {
			timeout = setTimeout(() => {
				sendMessage('still here', AUTHORS.BOT)
			}, 1000)

		}
		return () => {
			clearTimeout(timeout)
		}
	}, [messageList]);

	return (
		<div className="App">
			<header className="App-header">
				<MessageList messages={messageList} />
				<Counter />
				<Form onSubmit={handleAddMessage} />
			</header >
		</div>
	);
}

export default App;
