import { useEffect, useState } from "react";
import "./App.css";
import { Search } from "./Components/Search";
import { Weather } from "./Components/Weather";
import { Location } from "./Components/Location";
import { Temperature } from "./Components/Temperature";
import { Description } from "./Components/Description";
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
				handleWeather={setWeather}
				handleError={setError}
				handleIsFetched={setIsFetched}
			/>
			{isFetched && !error && (
				<Weather>
					<Location city={city} country={country} />
					<Temperature temperature={temp} />
					<Description description={description} />
				</Weather>
			)}
		</main>
	);
}
