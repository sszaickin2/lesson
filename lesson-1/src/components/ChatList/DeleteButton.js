import { useCallback } from "react"

export const DeleteButton = ({ id, onClick }) => {
	const handleClick = useCallback(() => {
		onClick(id)
	}, [onClick, id])
	return <span className="chat__delete" onClick={handleClick}>X</span>
}