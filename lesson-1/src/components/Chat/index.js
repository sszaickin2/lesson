import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AUTHORS } from '../../utils/constants';
import { MessageList } from '../MessageList';
import { Form } from '../Form';
import './styles.scss'


export function Chat() {
	
	const { chatId } = useParams();

	const [messageList, setMessageList] = useState({
		chat1: [],
		chat2: [],
		chat3: [],
		chat4: [],
		chat5: [],
	});

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
		setMessageList((prevMessageList) => ({
			...prevMessageList,
			[chatId]: [...prevMessageList[chatId], newMsg],
		}));
	}

	useEffect(() => {
		messagesEnd.current?.scrollIntoView();
		let timeout;
		if (messageList[chatId]?.[messageList[chatId]?.length - 1]?.author === AUTHORS.ME) {
			timeout = setTimeout(() => {
				sendMessage('Шалом', AUTHORS.BOT)
			}, 1000)

		}
		return () => {
			clearTimeout(timeout)
		}
	}, [messageList]);


	if (!messageList[chatId]) {
		return <Navigate to="/chats" replace />
	}


	return (
		<section className="form">
			<div className="form__content">
				<div className='form__message'>
					<MessageList messages={messageList[chatId]} />
					<div ref={messagesEnd} />
				</div>
				<div className='form__send send-form'>
					<Form onSubmit={handleAddMessage} />
				</div>
			</div>
		</section>
	);
}