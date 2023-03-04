import { useEffect, useState } from "react";
import axios from "axios";

const githubURL = "https://api.github.com/users/LonelyFirefly";

export default function App() {
	const [userData, setUserData] = useState({});

	useEffect(() => {
		getGithubUserWithAxios();
	}, []);

	const getGithubUserWithFetch = async () => {
		const response = await fetch(githubURL);
		const jsonData = await response.json();
		setUserData(jsonData);
	};
	const getGithubUserWithAxios = async () => {
		const response = await axios.get(githubURL);
		setUserData(response.data);
		console.log(response);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h2>GitHub User Data</h2>
			</header>
			<div className="user-container">
				<h5 className="info-item">{userData.name}</h5>
				<h5 className="info-item">{userData.location}</h5>
				<h5 className="info-item">{userData.blog}</h5>
				<h5 className="info-item">{userData.company}</h5>
			</div>
		</div>
	);
}
