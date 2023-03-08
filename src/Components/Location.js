export function Location({ city, location }) {
	return (
		<div className="weather__location">
			{city}, {location}
		</div>
	);
}
