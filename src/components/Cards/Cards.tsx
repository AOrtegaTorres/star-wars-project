interface Props {
	title: string;
	content: string;
	onClick?: () => void;
	list?: string[];
}

const Cards = ({ title, content, onClick, list }: Props) => {
	const handleClick = () => {
		if (onClick) {
			onClick();
		}
	};

	return (
		<div
			className="max-w-sm rounded overflow-hidden shadow-lg border border-yellow-300"
			onClick={handleClick}
			onKeyDown={handleClick}
			data-testid="card"
		>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">{content}</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				{list?.map((item) => (
					<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
						{item}
					</span>
				))}
			</div>
		</div>
	);
};

export default Cards;
