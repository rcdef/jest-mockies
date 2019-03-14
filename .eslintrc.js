module.exports = {
  extends: [
    'airbnb-base',
    'plugin:jest/recommended'
  ],
  plugins: ['jest'],
  rules: {
    'import/prefer-default-export': 'off',
    'comma-dangle': ['error', 'never'],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'require-await': 'error',
    'newline-after-var': 'error',
    'no-await-in-loop': 'off',
    'radix': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-console': ['error', { allow: ['warn', 'error'] }]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js'
      }
    }
  },
  env: {
    'jest/globals': true
  }
};