export default {
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        // your ESLint rules here
        'no-console': 'warn',
      },
    },
  ],
};