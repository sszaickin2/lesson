import { useEffect } from "react";
import { CircularProgress } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { getArticles } from "../../store/articles/actions";
import { selectArticles, selectArticlesLoading, selectError } from "../../store/articles/selector";

export const Articles = () => {
	const dispatch = useDispatch();
	const error = useSelector(selectError);
	const isLoading = useSelector(selectArticlesLoading);
	const articles = useSelector(selectArticles);

	const getData = async () => {
		dispatch(getArticles());
	}

	useEffect(() => {
		getData();
	}, []);


	return (
		<>
			<h3>Articles</h3>
			
			{error && <h5>Error: {error.message} </h5>}
			{error && <button onClick={getData}>Refrech</button>}
			{isLoading ? <CircularProgress /> :
				<ul>
					{articles.map((art) => (
						<li key={art.id}>{art.title}</li>
					))}
				</ul>}
		</>
	)
}