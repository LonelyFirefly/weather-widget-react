import { useState } from "react";
import "./App.css";
import { Search } from "./Components/Search";
import { Weather } from "./Components/Weather";
import { Location } from "./Components/Location";
import { Temperature } from "./Components/Temperature";
import { Description } from "./Components/Description";

export default function App() {
	const [weather, setWeather] = useState({});

	return (
		<main
			className={
				typeof weather.main !== "undefined" && weather.main.temp > 16
					? "app warm"
					: "app"
			}>
			<Search handleWeather={setWeather} />
			{typeof weather.main !== "undefined" && (
				<>
					<Weather>
						<Location
							city={weather.name}
							country={weather.sys.country}
						/>
						<Temperature temperature={weather.main.temp} />
						<Description
							description={weather.weather[0].description}
						/>
					</Weather>
				</>
			)}
		</main>
	);
}
