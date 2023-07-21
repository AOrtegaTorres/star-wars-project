import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Cards from "./Cards";

describe("<Card>", () => {
	it("render component", () => {
		render(<Cards title="greeting" content="content" />);
		expect(screen.queryByTestId("card")).toBeInTheDocument();
	});
});
