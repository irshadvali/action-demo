// eslint.config.mjs (or .js)
import { createConfig } from 'eslint';

export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    parser: '@babel/eslint-parser', // Ensure that Babel can parse JSX and modern JS
    parserOptions: {
      requireConfigFile: false,
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: ['react'],
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'airbnb',
    ],
    rules: {
      'react/jsx-uses-react': 'off', // React 17+ doesn't require the 'import React' in files
      'react/react-in-jsx-scope': 'off', // For React 17+ JSX doesn't need this import
    },
  },
];
