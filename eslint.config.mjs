export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true, // Enable JSX syntax
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
    },
    rules: {
      'react/jsx-uses-react': 'off', // For React 17+
      'react/react-in-jsx-scope': 'off', // For React 17+
    },
  },
];
