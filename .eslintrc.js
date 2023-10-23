export const env = {
  browser: true,
  es2021: true
};
export const extends = 'standard';
export const overrides = [
  {
    env: {
      node: true
    },
    files: [
      '.eslintrc.{js,cjs}'
    ],
    parserOptions: {
      sourceType: 'script'
    }
  }
];
export const parserOptions = {
  ecmaVersion: 'latest',
  sourceType: 'module'
};
export const rules = {};
