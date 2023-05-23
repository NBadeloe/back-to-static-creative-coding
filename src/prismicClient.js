import * as prismic from "@prismicio/client";
const repositoryName = "my-fav-albums";

const createClient = (params) => {
	const client = prismic.createClient(repositoryName, params);

	return client;
};

export default createClient;