import { Location } from "./Location";
import { Temperature } from "./Temperature";
import { Description } from "./Description";

export function WeatherCard({ city, country, temp, description }) {
	return (
		<>
			<Location city={city} country={country} />
			<Temperature temperature={temp} />
			<Description description={description} />
		</>
	);
}
