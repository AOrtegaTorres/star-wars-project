import { useGetAllCharactersQuery } from "../../api/characters";
import Cards from "../../components/Cards/Cards";

const Characteres = () => {
	const { data, isLoading } = useGetAllCharactersQuery();

	return (
		<div className="container mx-auto text-yellow-300 py-4">
			<div className="mb-4">
				<label
					className="block text-yellow-400 text-sm font-bold mb-2"
					htmlFor="search"
				>
					Character
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="search"
					type="text"
					placeholder="search"
				/>
			</div>
			{isLoading && (
				<div className="text-center">
					<div
						className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
						role="status"
					>
						<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
							Loading...
						</span>
					</div>
				</div>
			)}
			<div className="grid grid-cols-4 gap-4">
				{data?.results.length &&
					!isLoading &&
					data?.results.map((character) => (
						<Cards title={character.name} key={character.name} />
					))}
			</div>
		</div>
	);
};

export default Characteres;
