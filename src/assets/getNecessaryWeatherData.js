export function getNecessaryWeatherData(fetchedData) {
	try {
		if (typeof fetchedData === "undefined") return;
		let {
			name: city,
			main: { temp },
			weather: [{ description }],
			sys: { country },
		} = fetchedData;
		let neededWeatherData = { city, temp, description, country };
		return neededWeatherData;
	} catch (error) {
		alert("Enter a valid city name");
		return;
	}
}
