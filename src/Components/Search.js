import { useState } from "react";
import "../App.css";
import { handleErrors } from "../assets/handleErrors";

export function Search({ onWeather, onError, onIsFetched }) {
	const [query, setQuery] = useState("");
	const [isPending, setIsPending] = useState(false);
	const url = `${process.env.REACT_APP_API_URL}weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`;

	function handleSubmit(e) {
		e.preventDefault();
		handleWeatherData();
	}

	function handleWeatherData() {
		setIsPending(true);
		let response = fetchWeatherData();
		handleResponse(response);
	}

	async function fetchWeatherData() {
		return await fetch(url).then(handleErrors);
	}

	function handleResponse(res) {
		return res
			.then(async (res) => await res.json())
			.then((res) => {
				onWeather(res);
				console.log(`Response ${JSON.stringify(res)}`);
				onError(null);
				setQuery("");
				onIsFetched(true);
				setIsPending(false);
			})
			.catch((err) => {
				setIsPending(false);
				onError(true);
				console.log("Error: " + err.message);
			});
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
