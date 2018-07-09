module.exports = {
	extends: 'plugin:react/recommended',
	parserOptions: {
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	env: {
		es6: true,
		browser: true,
	},
	plugins: [
		'react',
	],

	rules: {
		'jsx-quotes': [ 2, 'prefer-single' ],
		'react/jsx-indent': [ 2, 2 ],
		'react/jsx-indent-props': [ 2, 2 ],
		'react/jsx-closing-bracket-location': [ 2, 'line-aligned' ],
		'padded-blocks': [  2, {'blocks': 'always'} ]
	},
};
