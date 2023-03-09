import { useState } from "react";
import "../App.css";

export function Search({ handleWeather, handleError, handleIsFetched }) {
	const [query, setQuery] = useState("");
	const [isPending, setIsPending] = useState(false);

	function fetchWeatherData() {
		setIsPending(true);
		fetch(
			`${process.env.REACT_APP_API_URL}weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
		)
			.then((res) => res.json())
			.then((res) => {
				handleWeather(res);
				console.log(`Response ${JSON.stringify(res)}`);
				if (res.message === "city not found") {
					throw new Error(res.message);
				} else if (res.message === "falied to fetch") {
					throw new Error(res.message);
				} else if (res.message === "Nothing to geocode") {
					throw new Error(res.message);
				} else {
					handleError(null);
					setQuery("");
					setIsPending(false);
					handleIsFetched(true);
				}
			})
			.catch((err) => {
				setIsPending(false);
				handleError(true);
				console.log("Error: " + err.message);
			});
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetchWeatherData();
	}

	return (
		<div className="search">
			<input
				type="search"
				className="search__search-bar"
				placeholder="Search..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button
				disabled={isPending}
				className="search__button"
				onClick={handleSubmit}>
				Search
			</button>
		</div>
	);
}
