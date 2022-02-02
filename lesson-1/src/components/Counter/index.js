import React, { useCallback, useEffect, useState } from "react"
import "./styles.scss"

export const Counter = () => {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("Alex");

	const updateCount = useCallback(() => {
		setCount(prevCount => prevCount + 1);
	}, [count]);


	return (
		<div>
			<h3>{count}</h3>
			<h3>{name}</h3>
			<button onClick={updateCount}>Click</button>

			<button
				onClick={() => {
					setName(prevName => prevName + count);
				}}
			>Click Name</button>
		</div>
	)
}