import { useState } from "react";
import "./App.css";
import { Search } from "./Components/Search";
import { Weather } from "./Components/Weather";

import { WeatherCard } from "./Components/WeatherCard";
import { getNecessaryWeatherData } from "./assets/getNecessaryWeatherData";
import { getMainThemeClassName } from "./assets/getMainThemeClassName";

export default function App() {
	const [weather, setWeather] = useState();
	const [error, setError] = useState(null);
	const [isFetched, setIsFetched] = useState(false);

	let weatherData = getNecessaryWeatherData(weather);
	let { city, temp, description, country } =
		isFetched && !error ? weatherData : "";
	let mainThemeClassName = getMainThemeClassName(temp);

	return (
		<main className={mainThemeClassName}>
			<Search
				onWeather={setWeather}
				onError={setError}
				onIsFetched={setIsFetched}
			/>
			{isFetched && !error && (
				<Weather>
					<WeatherCard
						city={city}
						country={country}
						temp={temp}
						description={description}></WeatherCard>
				</Weather>
			)}
			{error && (
				<h1 className="error-message">Enter a valid city name</h1>
			)}
		</main>
	);
}
