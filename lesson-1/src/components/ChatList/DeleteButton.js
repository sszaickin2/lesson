import { remove } from "@firebase/database";
import { getChatsRefById } from "../../services/firebase";
import "./form.scss"

export const DeleteButton = ({ id }) => {

	const handleDeleteChat = () => {
		remove(getChatsRefById(id));
	};

	return <span className="form-chat__delete" onClick={handleDeleteChat}>X</span>;
};
