import { useState } from "react";
import {
	useGetAllCharactersQuery,
	useSearchCharacterQuery,
} from "../../api/characters";
import Cards from "../../components/Cards/Cards";
import { getPage } from "../../utils";

const Characteres = () => {
	const [page, setPage] = useState<number>(1);
	const [search, setSearch] = useState<string>("");
	const { data, isLoading } = useGetAllCharactersQuery(page);
	const { data: character } = useSearchCharacterQuery(search);

	const changePage = (url: string | null) => {
		if (url) {
			const nextPage = getPage(url);
			setPage(Number(nextPage));
		}
	};

	const onSearchCharacter = (event: { target: HTMLInputElement }) => {
		setSearch((event.target as HTMLInputElement).value);
	};

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
					onChange={onSearchCharacter}
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
					!search &&
					data?.results.map((item) => {
						const { gender, hair_color, height } = item;
						return (
							<Cards
								title={item.name}
								key={item.name}
								content={item.birth_year}
								list={[gender, hair_color, height]}
							/>
						);
					})}
				{search &&
					character?.results.map((item) => {
						const { gender, hair_color, height } = item;
						return (
							<Cards
								title={item.name}
								key={item.name}
								content={item.birth_year}
								list={[gender, hair_color, height]}
							/>
						);
					})}
			</div>
			{!search && (
				<div>
					<nav
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="Pagination"
					>
						{data?.previous && (
							<button
								onClick={() => changePage(data?.previous)}
								type="button"
								className=" bg-gray-50 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
							>
								<span className="sr-only">Previous</span>
								<svg className="h-5 w-5" viewBox="0 0 20 20" aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
										clip-rule="evenodd"
									/>
								</svg>
							</button>
						)}
						{data?.next && (
							<div className="container">
								<button
									type="button"
									className=" bg-gray-50 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
									onClick={() => changePage(data?.next)}
								>
									<span className="sr-only">Next</span>
									<svg
										className="h-5 w-5"
										viewBox="0 0 20 20"
										aria-hidden="true"
									>
										<path
											color="white"
											fillRule="evenodd"
											d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
											clipRule="evenodd"
										/>
									</svg>
								</button>
							</div>
						)}
					</nav>
				</div>
			)}
		</div>
	);
};

export default Characteres;
