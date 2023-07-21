import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { ReactComponent as ReactLogo } from "./media/star-wars-4.svg";

function App() {
	const navigate = useNavigate();
	const [showText, setShowText] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => setShowText(true), 5500);
	}, []);

	useEffect(() => {
		setTimeout(() => navigate("characters"), 14000);
	}, []);

	return (
		<div
			className="container mx-auto"
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
		>
			{!showText && <ReactLogo className="App-logo" />}
			{showText && (
				<div className="container-sw">
					<div className="fade" />
					<div className="text-yellow-400 swanimation crawl">
						<p>SWAPI</p>
						<br />
						<p>
							This is a project to show characters of star wars movies, you will
							able to search and view characters details.
						</p>
						<br />
						<p>
							Dependencies: This project uses react, redux to manage the app
							state, redux-toolkit to request and reduce the redux boilerplate,
							rome a dependency to prevent code errors and format it
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default App;
