import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Character } from "../../interfaces";

export const getCharacters = createAsyncThunk(
	"characters/getCharacters",
	async () => {
		const response = await fetch("https://swapi.dev/api/people/");
		const data: Character[] = await response.json();
		return data;
	},
);

interface InitialState {
	characters: Character[];
	status: "loading" | "idle";
	error: null | string;
}

const initialState: InitialState = {
	characters: [],
	status: "idle",
	error: null,
};

export const charactersSlice = createSlice({
	name: "characters",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCharacters.pending, (state) => {
			state.status = "loading";
			state.error = null;
		});
		builder.addCase(
			getCharacters.fulfilled,
			(state, action: PayloadAction<any>) => {
				state.characters.push(...action.payload.results);
				state.status = "idle";
			},
		);
		builder.addCase(
			getCharacters.rejected,
			(state, action: PayloadAction<any>) => {
				if (action.payload) state.error = action.payload.message;
				state.status = "idle";
			},
		);
	},
});

export default charactersSlice.reducer;
