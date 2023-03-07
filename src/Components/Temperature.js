export function Temperature({ data }) {
	return <div className="weather__temp">{Math.round(data.main.temp)}°c</div>;
}
