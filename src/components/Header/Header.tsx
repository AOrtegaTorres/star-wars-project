import { Link, useLocation } from "react-router-dom";

interface Options {
	path: string;
	label: string;
}

interface Props {
	navOptions: Options[];
}

const Header = ({ navOptions }: Props) => {
	const location = useLocation();
	return (
		<header className="bg-transparent text-yellow-300 z-50 sticky top-0">
			<nav className="bg-gray-800 mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
				<div className="hidden sm:ml-6 sm:block">
					<div className="flex space-x-4">
						{navOptions.map((path: Options) => (
							<Link
								key={path.label}
								to={path.path}
								className={`${
									path.path === location.pathname ? "bg-gray-900" : ""
								} text-yellow rounded-md px-3 py-2 text-sm font-medium`}
								aria-current="page"
							>
								{path.label}
							</Link>
						))}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
