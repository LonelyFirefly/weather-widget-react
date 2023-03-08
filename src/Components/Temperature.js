export function Temperature({ temperature }) {
	return <div className="weather__temp">{Math.round(temperature)}°c</div>;
}
