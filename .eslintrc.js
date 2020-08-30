module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['google'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
    'require-jsdoc': 0,
  },
};
