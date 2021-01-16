module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 12, sourceType: 'module' },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-classes-per-file': 'off',
    'object-curly-newline': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 0,
    'class-methods-use-this': 'off',
    'operator-linebreak': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'max-len': ['error', { code: 120 }],
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'ignore',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 120,
      },
    ],
  },
  settings: { 'import/resolver': { node: { extensions: ['.ts'], paths: ['./src'] } } },
  overrides: [
    {
      files: ['**/migrations/*.ts'],
      rules: {
        'react/prop-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
