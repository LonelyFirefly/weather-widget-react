import "../App.css";

export function Search({ query, handleWeather, handleQuery }) {
	function handleSubmit(e) {
		e.preventDefault();
		fetch(
			`${process.env.REACT_APP_API_URL}weather?q=${query}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
		)
			.then((res) => res.json())
			.then((result) => {
				handleWeather(result);
				console.log(result);
				if (result.message === "city not found") {
					alert("Enter valid city");
				} else {
					handleQuery("");
				}
			});
	}

	return (
		<div className="search">
			<input
				type="search"
				className="search__search-bar"
				placeholder="Search..."
				value={query}
				onChange={(e) => handleQuery(e.target.value)}
			/>
			<button className="search__button" onClick={handleSubmit}>
				Search
			</button>
		</div>
	);
}
