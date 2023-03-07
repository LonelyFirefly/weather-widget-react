export function Description({ data }) {
	return (
		<div className="weather__description">
			{data.weather[0].description}
		</div>
	);
}
