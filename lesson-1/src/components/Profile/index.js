import { set } from "@firebase/database";
import { useContext, useState } from "react";
import { connect } from "react-redux";
import { auth, getProfileNameRef, logout, profileShowNameRef } from "../../services/firebase";
import { changeShowName, changeName } from "../../store/profile/actions";
import { selectName, selectShowName } from "../../store/profile/selectors";
import { ThemeContext } from "../../utils/ThemeContext";
import { Form } from "../Form";



export const ProfileToConnect = () => {
	const { setMessageColor } = useContext(ThemeContext);
	const [name] = useState("");
	const [showName] = useState(false);

	const handleChangeShowName = () => {
		set(profileShowNameRef, !showName);
	};

	const handleClick = () => {
		setMessageColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
	};

	const handleChangeName = (text) => {
		console.log(auth.currentUser);
		set(getProfileNameRef(auth.currentUser.uid), text);
	};

	const handleLogout = async () => {
		try {
			await logout();
		} catch (e) {
			console.warn(e);
		}
	};

	return (
		<>
			<h3>Profile</h3>
			<div>
				<button onClick={handleLogout}>LOGOUT</button>
			</div>
			<div>
				<button onClick={handleClick}>Change theme</button>
			</div>
			<div>
				{showName && <h4>{name}</h4>}
				<input type="checkbox" />
				<button onClick={handleChangeShowName}>Change show name</button>
			</div>
			<Form onSubmit={handleChangeName} />
		</>
	);
};

const mapStateToProps = (state) => ({
	showName: selectShowName(state),
	name: selectName(state),
});

const mapDispatchToProps = {
	setShowName: () => changeShowName,
	setName: changeName,
};

const ConnectedProfile = connect(
	mapStateToProps,
	mapDispatchToProps
)(ProfileToConnect);
export default ConnectedProfile;
