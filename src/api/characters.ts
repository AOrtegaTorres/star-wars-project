import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://swapi.dev/api/";

export const charactersApi = createApi({
	reducerPath: "charactersApi",
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getAllCharacters: builder.query({
			query: () => "people/",
		}),
	}),
});

export const { useGetAllCharactersQuery } = charactersApi;
