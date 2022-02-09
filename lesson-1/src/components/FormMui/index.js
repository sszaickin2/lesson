import { useEffect, useState, useRef } from "react";
import { Button, TextField } from "@mui/material";

import "./styles.scss";


export const FormMui = ({ onSubmit }) => {
	const [value, setValue] = useState("");
	const inputFocus = useRef();

	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
		setValue("");
	};

	useEffect(() => {
		inputFocus.current?.focus();
	}, []);

	return (
		<form className="mui-form" onSubmit={handleSubmit}>
			<TextField className="mui-input" inputRef={inputFocus} value={value} onChange={handleChange} placeholder="Написать сообщение..." />
			<Button className="mui-button" type="submit">Отправить</Button>
		</form>
	)
}