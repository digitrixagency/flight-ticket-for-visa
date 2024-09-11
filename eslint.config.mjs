import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Include Node.js globals
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
      // Custom rules or overrides can be added here
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the React version
      },
    },
  },
];
