module.exports = {
	env: {
		es6: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
	],

	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript featuress
	},

	rules: {
		indent: [2, 'tab'],
		quotes: ['error', 'single'],
		'no-undef': 2,
		'prefer-const': 2,
		semi: ['error', 'always'],
		'no-console': 0,
		'@typescript-eslint/explicit-member-accessibility': 0,
		'@typescript-eslint/camelcase': 0,
		'@typescript-eslint/class-name-casing': 0,
		'@typescript-eslint/no-var-requires': 0,
	},
};
