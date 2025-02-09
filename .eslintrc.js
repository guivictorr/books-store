module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: ['react', 'prettier', '@typescript-eslint', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.tsx', '.ts', '.jsx', '.js'] },
    ],
    'import/prefer-default-export': 'off',
    'no-param-reassign': 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'import/extensions': 'off',
    'react/style-prop-object': 'off',
    camelcase: 'off',
    'react/prop-types': 'off',
    'no-use-before-define': [0],
    '@typescript-eslint/no-use-before-define': [1],
    'react/jsx-props-no-spreading': 'off',
  },
};
