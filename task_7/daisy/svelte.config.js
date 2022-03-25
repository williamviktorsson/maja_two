import adapter from 'svelte-adapter-github';
import sveltePreprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess(),

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			domain: null,
			jekyll: false,
			fallback: null,
			precompress: false
		})
	}
	,
	paths: {
		base: dev ? '' : '/maja_two/task_7/daisy/docs',
	},
};

export default config;
