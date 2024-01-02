module.exports = {
  env: {
    browser: true,
    es2021: true,
    //Для jest
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  plugins: ['jest'],

  overrides: [
    {
      env: {
        node: true,
        //Для jest
        jest: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'warn',
  },
}
