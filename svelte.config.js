import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;
// {
// 			  // default options are shown. On some platforms
//             // these options are set automatically — see below
//             pages: 'build',
//             assets: 'build',
//             fallback: null,
//             precompress: false,
//             strict: true
// 		}