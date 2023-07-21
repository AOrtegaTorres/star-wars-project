import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { ReactComponent as ReactLogo } from "./media/star-wars-4.svg";

function App() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => navigate("characters"), 5500);
	}, []);

	return (
		<div className="App">
			<ReactLogo style={{ width: 1000 }} className="App-logo" />
		</div>
	);
}

export default App;
