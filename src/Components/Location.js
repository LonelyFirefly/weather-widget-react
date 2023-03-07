export function Location({ data }) {
	return (
		<div className="weather__location">
			{" "}
			{data.name}, {data.sys.country}{" "}
		</div>
	);
}
