// eslint.config.js
import next from '@next/eslint-plugin-next';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import simpleSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

export default [
  {
    ignores: ['node_modules', '.turbo', 'dist', 'build'],
    languageOptions: {
      ecmaVersion: 2022,
      parser: typescriptParser,
      globals: {
        browser: true,
        es2021: true,
        node: true,
      },
    },
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      react,
      '@next': next,
      '@typescript-eslint': typescriptEslint,
      'simple-import-sort': simpleSort,
      'unused-imports': unusedImports,
      import: importPlugin,
    },
    rules: {
      'no-var': 'error',
      'no-console': 'error',
      'prefer-const': 'error',
      'no-irregular-whitespace': 'off',
      'no-unsafe-optional-chaining': 0,
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-empty-function': 0,
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          // exactly "_" (so imports or variables named "_" are allowed)
          varsIgnorePattern: '^_$',
          args: 'after-used',
          // allow function args named "_"
          argsIgnorePattern: '^_$',
          // also allow `catch ( _ ) {}` patterns
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_$',
          ignoreRestSiblings: true,
        },
      ],
      '@next/no-img-element': 'error',
      'react/no-unescaped-entities': 'off',
      'react/display-name': 'off',
      'react/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never' }],

      //#region  //*=========== Import Sort ===========
      'simple-import-sort/exports': 'warn',
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // ext library & side effect imports
            ['^@?\\w', '^\\u0000'],
            // {s}css files
            ['^.+\\.s?css$'],
            // Lib and Hooks
            ['^@/lib', '^@/hooks'],
            // static data
            ['^@/data'],
            // components
            ['^@/components', '^@/container'],
            // zustand store
            ['^@/store'],
            // Other imports
            ['^@/'],
            // relative paths up until 3 level
            [
              '^\\./?$',
              '^\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\./\\.\\.(?!/?$)',
            ],
            ['^@/types'],
            // other that didnt fit in
            ['^'],
          ],
        },
      ],
      //#endregion  //*======== Import Sort ===========

      //#region  //*=========== Unused import ===========
      'no-unused-vars': 'off', // or
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          // exactly "_" (so imports or variables named "_" are allowed)
          varsIgnorePattern: '^_$',
          args: 'after-used',
          // allow function args named "_"
          argsIgnorePattern: '^_$',
          // also allow `catch ( _ ) {}` patterns
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_$',
          ignoreRestSiblings: true,
        },
      ],
      //#endregion  //*======== Unused import ===========

      //#region  //*=========== import ===========
      'import/no-duplicates': ['error', { considerQueryString: true }], // or
      //#endregion  //*======== Unused import ===========
    },
  },
];
