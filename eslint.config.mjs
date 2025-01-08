// eslint.config.mjs
import { defineConfig } from 'eslint';

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
