import React, { useEffect, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { AUTHORS } from '../../utils/constants';
import { MessageList } from '../MessageList';
import { Form } from '../Form';
import { useDispatch, useSelector } from 'react-redux';
import { selectMessages } from '../../store/messages/selectors';
import { addMessageWithThunk } from '../../store/messages/actions';
import './styles.scss'


export function Chat() {

	const { chatId } = useParams();
	const messages = useSelector(selectMessages);
	const dispatch = useDispatch();
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
		dispatch(addMessageWithThunk(chatId, newMsg));
	}

	useEffect(() => {
		messagesEnd.current?.scrollIntoView();
	}, [messages]);


	if (!messages[chatId]) {
		return <Navigate to="/chats" replace />
	}

	return (
		<div className="chat">
			<div className='chat__message'>
				<MessageList messages={messages[chatId]} />
				<div ref={messagesEnd} />
			</div>
			<div className='chat__send send-form'>
				<Form onSubmit={handleAddMessage} />
			</div>
		</div>
	);
}