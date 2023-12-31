module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'indent': ['error', 2], // Enforce 2-space indentation
    'linebreak-style': 'off', // Disable linebreak style rule
    'quotes': ['error', 'double'], // Enforce double quotes
    'semi': ['error', 'always'], // Enforce semicolons
    'no-multi-spaces': 'error', // Disallow multiple spaces
    'no-multiple-empty-lines': 'error', // Disallow multiple empty lines
    'comma-dangle': ['error', 'never'] // Enforce trailing commas
  },
}

