import reactPlugin from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'react/jsx-uses-react': 'off', // For React 17+
      'react/react-in-jsx-scope': 'off', // For React 17+
    },
  },
];
