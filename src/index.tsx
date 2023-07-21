import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Header from "./components/Header/Header";
import "./index.css";
import Characteres from "./pages/Characteres/Characters";
import { store } from "./store";

const paths = [
	{ label: "Dashboard", path: "/" },
	{ label: "Characters", path: "/characters" },
];

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Header navOptions={paths} />
			<Routes>
				<Route path="/" Component={App} />
				<Route path="/characters/:page?" Component={Characteres} />
			</Routes>
		</BrowserRouter>
	</Provider>,
);
