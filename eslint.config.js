import config from '@bifravst/eslint-config-typescript'
export default [
	...config,
	{
		ignores: ['cdk.out/*', 'build/*', 'dist/*'],
	},
]
