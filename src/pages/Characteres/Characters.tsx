import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { getCharacters } from "../../store/characters/slice";

const Characteres = () => {
	const dispatch = useAppDispatch();
	const characters = useAppSelector((state) => state.characters.characters);

	useEffect(() => {
		dispatch(getCharacters());
	}, []);

	return <div style={{ color: "red" }}>Characteres</div>;
};

export default Characteres;
