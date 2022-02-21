import { useState, useEffect, useRef } from "react"
import "./styles.scss"


export const Form = ({ onSubmit }) => {
	const [value, setValue] = useState('');
	const textFocus = useRef();

	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
		setValue("");
	}

	useEffect(() => {
		textFocus.current?.focus();
	}, []);

	return (
		<form className="send" onSubmit={handleSubmit}>
			<input className="send__input" ref={textFocus} value={value} onChange={handleChange} type="text" placeholder="Написать сообщение..." />
			<button className="send__button" type="submit">Отправить</button>
		</form>
	)
}