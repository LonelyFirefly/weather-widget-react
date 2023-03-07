import { useState } from "react";
import "./App.css";
import { Search } from "./Components/Search";
import { Weather } from "./Components/Weather";
import { Location } from "./Components/Location";
import { Temperature } from "./Components/Temperature";
import { Description } from "./Components/Description";

export default function App() {
	const [weather, setWeather] = useState({});
	const [query, setQuery] = useState("");

	return (
		<main
			className={
				typeof weather.main != "undefined"
					? weather.main.temp > 16
						? "app warm"
						: "app"
					: "app"
			}>
			<Search
				query={query}
				handleWeather={setWeather}
				handleQuery={setQuery}
			/>
			{typeof weather.main !== "undefined" && (
				<>
					<Weather>
						<Location data={weather} />
						<Temperature data={weather} />
						<Description data={weather} />
					</Weather>
				</>
			)}
		</main>
	);
}
