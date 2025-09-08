/* ESLint configuration for React + TypeScript (Vite) with Prettier */
module.exports = {
    root: true,
    env: {
        browser: true,
        es2022: true,
        node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
        project: undefined,
    },
    settings: {
        react: { version: "detect" },
        "import/resolver": {
            typescript: {},
        },
    },
    plugins: ["@typescript-eslint", "react", "react-hooks", "unused-imports", "simple-import-sort"],
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
    ],
    rules: {
        // TS/JS general rules
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": [
            "warn",
            { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
        ],

        // Import ordering
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",

        // React 17+ JSX transform tolerates no React in scope
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",

        // Allow explicit any during transition
        "@typescript-eslint/no-explicit-any": "off",
    },
    overrides: [
        {
            files: ["*.config.*", "vite.config.*", "*.cjs"],
            env: { node: true },
        },
    ],
    ignorePatterns: ["dist/", "build/", "node_modules/", "coverage/"],
};
