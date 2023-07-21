import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Characteres from "./pages/Characteres/Characters";
import { store } from "./store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement,
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={App} />
				<Route path="/characters" Component={Characteres} />
			</Routes>
		</BrowserRouter>
	</Provider>,
);
