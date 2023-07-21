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
		getAllCharacters: builder.query<Response, { page?: number; name?: string }>(
			{
				query: (args) => {
					const { page, name } = args;
					return `people/?page=${page}&search=${name}`;
				},
			},
		),
		getCharacterById: builder.query<Character, void>({
			query: (id) => `people/${id}`,
		}),
	}),
});

export const { useGetAllCharactersQuery, useGetCharacterByIdQuery } =
	charactersApi;
