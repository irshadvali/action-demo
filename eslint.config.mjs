// eslint.config.mjs
export default {
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        'no-console': 'warn',
      },
    },
  ],
};
