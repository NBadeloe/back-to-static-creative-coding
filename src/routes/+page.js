import createClient from '../prismicClient';


export async function load({ fetch, request }) {
	const client = createClient({ fetch, request });
	const document = await client.getAllByType('albums');

  console.log(document);

	if (document) {
		return { document };
	}

	error(404, 'Not found');
}