import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

const paths = [
	{ label: "Dashboard", path: "/" },
	{ label: "Characters", path: "/characters" },
];
describe("<Header>", () => {
	it("render component", () => {
		render(
			<BrowserRouter>
				<Header navOptions={paths} />
			</BrowserRouter>,
		);
		expect(screen.queryByTestId("header")).toBeInTheDocument();
	});
});
