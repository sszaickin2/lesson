import { useContext, useState } from "react";
import { ThemeContext } from "../../utils/ThemeContext";
import "./styles.scss";

export const FormMui = ({ onSubmit }) => {
	const [value, setValue] = useState("");

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(value);
		setValue("");
	};

	return (
		<form className="form__content" onSubmit={handleSubmit}>
			<input className="form__input" value={value} onChange={handleChange} />
			<button className="form__button" variant="contained">Send</button>
		</form>
	);
};

const withContext = (Component) => {
	return (props) => {
		const { messageColor } = useContext(ThemeContext);
		return <Component messageColor={messageColor} {...props} />;
	};
};

export const FormWithLogger = withContext(FormMui);
