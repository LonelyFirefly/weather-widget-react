import { useState } from "react";
import "../App.css";

export function Search({ onWeather, onError, onIsFetched }) {
	const [query, setQuery] = useState("");
	const [isPending, setIsPending] = useState(false);
	const url = `${process.env.REACT_APP_API_URL}weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

	function handleWeatherData() {
		setIsPending(true);
		let response = fetchWeatherData();
		handleResponse(response);
	}

	function fetchWeatherData() {
		return fetch(url);
	}

	function handleResponse(res) {
		return res
			.then((res) => res.json())
			.then((res) => {
				onWeather(res);
				console.log(`Response ${JSON.stringify(res)}`);
				if (res.message === "city not found") {
					// throw new Error(res.message);
				} else if (res.message === "falied to fetch") {
					// throw new Error(res.message);
				} else if (res.message === "Nothing to geocode") {
					// throw new Error(res.message);
				} else {
					onError(null);
					setQuery("");
					onIsFetched(true);
					setIsPending(false);
				}
			})
			.catch((err) => {
				setIsPending(false);
				onError(true);
				console.log("Error: " + err.message);
			});
	}

	function handleSubmit(e) {
		e.preventDefault();
		handleWeatherData();
	}

	return (
		<form className="search" onSubmit={handleSubmit}>
			<input
				type="text"
				className="search__search-bar"
				placeholder="Search..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<input
				type="submit"
				disabled={isPending}
				className="search__button"
				value="Search"></input>
		</form>
	);
}
