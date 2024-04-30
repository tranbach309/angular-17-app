import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
      "no-undef-init": "error",
      "camelcase": "error",
      "eqeqeq": "error",
      "no-var": "error"
    },
    languageOptions: {
      globals: globals.browser
    },

  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
