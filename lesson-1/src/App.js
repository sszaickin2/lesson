import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import { Form } from './components/Form';
import { AUTHORS } from './utils/constants';
import { MessageList } from './components/MessageList';
import { ChatList } from './components/ChatList';
import { FormMui } from './components/FormMui';


function App() {
	const [messageList, setMessageList] = useState([]);
	const messagesEnd = useRef();

	const handleAddMessage = (text) => {
		sendMessage(text, AUTHORS.ME)
	};

	const sendMessage = (text, author) => {
		const newMsg = {
			text,
			author,
			id: `msg-${Date.now()}`,
		}
		setMessageList((prevMessageList) => [...prevMessageList, newMsg]);
	}

	useEffect(() => {
		messagesEnd.current?.scrollIntoView();
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
			<ChatList />
			<div className="App-content">
				<div className='App-message'>
					<MessageList messages={messageList} />
					<div ref={messagesEnd} />
				</div>

				<div className='App-form'>
					<Form onSubmit={handleAddMessage} />
					<FormMui onSubmit={handleAddMessage} />
				</div>
			</div>

		</div>
	);
}

export default App;
