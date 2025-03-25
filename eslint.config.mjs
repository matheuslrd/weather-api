import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginSecurity from 'eslint-plugin-security';
import pluginNode from 'eslint-plugin-node';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        languageOptions: { globals: globals.node }
    },
    {
        files: ['**/*.{js,mjs,cjs,ts}'],
        plugins: { js },
        extends: ['js/recommended']
    },
    tseslint.configs.recommended,
    pluginSecurity.configs.recommended
]);
