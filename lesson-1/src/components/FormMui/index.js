import { useEffect, useState, useRef } from "react";
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
			<input className="mui-form__input" type="text" ref={inputFocus} value={value} onChange={handleChange} placeholder="Название чата..." />
		</form>
	)
}