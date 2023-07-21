import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Character } from "../interfaces";

const baseUrl = "https://swapi.dev/api/";

interface Response {
	count: number;
	next: string;
	previous: null | string;
	results: Character[];
}

export const charactersApi = createApi({
	reducerPath: "charactersApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getAllCharacters: builder.query<Response, number | void>({
			query: (page = 1) => `people/?page=${page}`,
		}),
	}),
});

export const { useGetAllCharactersQuery } = charactersApi;
