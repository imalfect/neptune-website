import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Adapting the "extends" array
  ...compat.extends("prettier", "next/core-web-vitals", "next/typescript"),

  // Adding parser options
  {
    files: ["**/*.ts", "**/*.tsx"], // Target TypeScript files
  },

  // Adding rules
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
