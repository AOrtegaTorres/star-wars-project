import { renderHook, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import type { ReactNode } from "react";
import { Provider } from "react-redux";
import { useGetAllCharactersQuery } from "../../api/characters";
import { store } from "../../store";

function wrapper({ children }: { children: ReactNode }) {
	return <Provider store={store}>{children}</Provider>;
}

beforeEach(() => {
	fetchMock.resetMocks();
});

describe("useGetAllCharactersQuery", () => {
	const endpointName = "people";
	const pokemon = "pikachu";
	const data = {};

	beforeEach(() => {
		fetchMock.mockOnceIf(`https://pokeapi.co/api/v2/pokemon/${pokemon}`, () =>
			Promise.resolve({
				status: 200,
				body: JSON.stringify({ data }),
			}),
		);
	});

	it("renders hook", async () => {
		const { result } = renderHook(
			() => useGetAllCharactersQuery({ page: 1, name: "" }),
			{
				wrapper,
			},
		);

		expect(result.current).toMatchObject({
			status: "pending",
			endpointName,
			isLoading: true,
			isSuccess: false,
			isError: false,
			isFetching: true,
		});

		await waitFor(() => expect(result.current.isSuccess).toBe(true));
		expect(fetchMock).toBeCalledTimes(1);

		expect(result.current).toMatchObject({
			status: "fulfilled",
			endpointName,
			data,
			isLoading: false,
			isSuccess: true,
			isError: false,
			currentData: data,
			isFetching: false,
		});
	});
});
