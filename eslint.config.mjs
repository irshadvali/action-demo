import reactPlugin from 'eslint-plugin-react';
import babelParser from '@babel/eslint-parser';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'react/jsx-uses-react': 'off', // For React 17+
      'react/react-in-jsx-scope': 'off', // For React 17+
      'react/prop-types': 'off', // Disable prop-types rule if using TypeScript
      'no-console': [
        'error',
        { allow: ['error', 'log', 'debug', 'trace', 'group', 'groupEnd', 'table'] },
      ],
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
    },
  },
];
