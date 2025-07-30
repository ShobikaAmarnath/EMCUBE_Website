import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

// Helper to downgrade all rules to 'warn'
function downgradeToWarn(rules) {
  return Object.fromEntries(
    Object.entries(rules).map(([key, value]) => {
      if (Array.isArray(value)) {
        return [key, ['warn', ...value.slice(1)]]
      }
      return [key, 'warn']
    })
  )
}

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...downgradeToWarn(js.configs.recommended.rules),
      ...downgradeToWarn(react.configs.recommended.rules),
      ...downgradeToWarn(react.configs['jsx-runtime'].rules),
      ...downgradeToWarn(reactHooks.configs.recommended.rules),
      'react/jsx-no-target-blank': 'off',
       'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
]
