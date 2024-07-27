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
  },
}

// 이 구성 파일 (.eslintrc.cjs)은 JavaScript 및 TypeScript 코드의 린팅에 사용됩니다.
// 추천된 ESLint 규칙을 확장하고 TypeScript 및 React hooks에 대한 추가 규칙을 포함합니다.
// 'ignorePatterns' 속성은 린팅 중 무시할 파일 및 디렉토리를 지정합니다.
// 'parser' 속성은 TypeScript ESLint 파서를 사용해야 함을 지정합니다.
// 'plugins' 속성은 'react-refresh' 플러그인을 포함하여 React 컴포넌트의 린팅을 수행합니다.
// 'rules' 속성은 'react-refresh/only-export-components'와 같은 사용자 정의 린팅 규칙을 정의합니다.