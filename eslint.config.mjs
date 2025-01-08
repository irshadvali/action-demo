
export default [
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    rules: {
      'react/jsx-uses-react': 'off', // React 17+ doesn't require the 'import React' in files
      'react/react-in-jsx-scope': 'off', // For React 17+ JSX doesn't need this import
    },
  },
];
