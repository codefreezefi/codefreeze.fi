import mdx from '@mdx-js/rollup'
import preact from '@preact/preset-vite'
import rehypeSlug from 'rehype-slug'
import vike from 'vike/plugin'
import type { UserConfig } from 'vite'
import { statusJsonPlugin } from './plugins/status-json.ts'

const config = {
	plugins: [
		{
			enforce: 'pre',
			...mdx({ rehypePlugins: [rehypeSlug] }),
		},
		preact(),
		vike(),
		statusJsonPlugin(),
	],
	optimizeDeps: {
		include: [
			'preact',
			'preact/hooks',
			'preact/jsx-dev-runtime',
			'preact-render-to-string',
		],
	},
} satisfies UserConfig

export default config
