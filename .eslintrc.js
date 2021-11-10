module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: ['airbnb-base'],
	parserOptions: {
		ecmaVersion: 13,
	},
	rules: {
		'import/newline-after-import': 0,
		'no-unused-vars': 1,
		'no-console': 0,
		'no-alert': 0,
		'consistent-return': 0,
		'no-tabs': 0,
		semi: 0,
		indent: 0,
		'object-curly-spacing': 0,
		'nonblock-statement-body-position': 0,
		'func-names': 0,
		'newline-per-chained-call': 0,
		'no-underscore-dangle': 0,
		curly: 0,
		quotes: ['error', 'single', {allowTemplateLiterals: true}],
	},
}
