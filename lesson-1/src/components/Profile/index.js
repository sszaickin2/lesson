import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux";
import { changeShowName, CHANGE_NAME } from "../../store/profile/actions";
import { ThemeContext } from "../../utils/ThemeContex"
import { FormMui } from "../FormMui";
import "./styles.scss"

export const Profile = () => {
	const { setMessageColor } = useContext(ThemeContext);

	const dispatch = useDispatch();
	const data = useSelector((state) => state);

	const handleChangeShowName = () => {
		dispatch(changeShowName);
	}

	const handleClick = () => {
		setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"))
	}

	const handleChangeName = (text) => {
		dispatch({
			type: CHANGE_NAME,
			payload: text
		});
	}

	return (
		<>
			<section className="profile">
				<h3 className="profile__heading">Profile</h3>
				<div>
					<button onClick={handleClick}>Click me</button>
				</div>
				<div className="profile__info">
					<input type="checkbox" onClick={handleChangeShowName} />
					{data.showName && <span className="profile__text">{data.name}</span>}
				</div>

				<FormMui onSubmit={handleChangeName} />
			</section>
		</>
	)
}


