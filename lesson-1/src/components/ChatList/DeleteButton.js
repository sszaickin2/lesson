import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/chats/actions";

export const DeleteButton = ({ id }) => {
	const dispatch = useDispatch();

	const handleDeleteChat = () => {
		dispatch(deleteChat(id));
	}
	return <span className="chat-list__delete" onClick={handleDeleteChat}>X</span>
}