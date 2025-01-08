// eslint.config.mjs
import { defineConfig } from 'eslint';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      // Add your rules here, for example:
      'no-console': 'warn',
    },
  },
]);