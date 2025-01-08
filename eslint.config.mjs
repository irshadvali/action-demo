// eslint.config.mjs
import pkg from 'eslint'; // Default import for CommonJS modules
const { defineConfig } = pkg;

export default defineConfig([
  {
    files: ['**/*.ts', '**/*.tsx'],  // Config for TypeScript files
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'warn', // Example rule
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],  // Config for JavaScript files
    rules: {
      'no-console': 'warn', // Example rule
    },
  },
]);
