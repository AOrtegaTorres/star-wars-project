import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "../api/characters";
import characterReducer from "./characters/slice";

export const store = configureStore({
	reducer: {
		characters: characterReducer,
		[charactersApi.reducerPath]: charactersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(charactersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
