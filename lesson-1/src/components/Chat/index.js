import React, { useEffect, useRef, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AUTHORS } from '../../utils/constants';
import { MessageList } from '../MessageList';
import { Form } from '../Form';
import './styles.scss'


export function Chat({ messages, addMessage }) {

	const { chatId } = useParams();
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
		addMessage(chatId, newMsg);
	}

	useEffect(() => {
		messagesEnd.current?.scrollIntoView();
		let timeout;
		if (messages[chatId]?.[messages[chatId]?.length - 1]?.author === AUTHORS.ME) {
			timeout = setTimeout(() => {
				sendMessage('Шалом', AUTHORS.BOT)
			}, 1000)

		}
		return () => {
			clearTimeout(timeout)
		}
	}, [messages]);


	if (!messages[chatId]) {
		return <Navigate to="/chats" replace />
	}

	return (
		<div className="form">
			<div className='form__message'>
				<MessageList messages={messages[chatId]} />
				<div ref={messagesEnd} />
			</div>
			<div className='form__send send-form'>
				<Form onSubmit={handleAddMessage} />
			</div>
		</div>
	);
}