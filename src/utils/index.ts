export const getPage = (url: string) => {
	const page = url.substr(url.length - 1, 1);
	return page;
};
