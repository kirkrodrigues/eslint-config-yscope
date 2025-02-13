import ReactPlugin from "eslint-plugin-react";
import ReactHooksPlugin from "eslint-plugin-react-hooks";
import Globals from "globals";


const ReactConfigArray = [
    {
        languageOptions: {
            globals: {
                ...Globals.browser,
                process: "readonly",
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            "react-hooks": ReactHooksPlugin,
            "react": ReactPlugin,
        },
        rules: {
            "react-hooks/exhaustive-deps": ["warn"],
            "react-hooks/rules-of-hooks": ["error"],

            "react/boolean-prop-naming": [
                "error",
                {
                    rule: "^(is|has|disable|enable)[A-Za-z0-9]*",
                    validateNested: false,
                },
            ],
            "react/destructuring-assignment": [
                "warn",
                "always",
            ],
            "react/display-name": ["error"],
            "react/function-component-definition": [
                "warn",
                {
                    namedComponents: "arrow-function",
                    unnamedComponents: "arrow-function",
                },
            ],
            "react/hook-use-state": [
                "warn",
                {
                    allowDestructuredState: true,
                },
            ],

            // Some rules with the `jsx-` prefix are covered by `@stylistic/eslint-plugin-jsx`
            // while others aren't (yet). So we list all available JSX rules from
            // `eslint-plugin-react` below (for reference), and only enable those that are useful
            // and not yet covered by `@stylistic/eslint-plugin-jsx`.
            "react/jsx-boolean-value": [
                "warn",
                "always",
            ],
            "react/jsx-child-element-spacing": ["off"],
            "react/jsx-closing-bracket-location": ["off"],
            "react/jsx-closing-tag-location": ["off"],
            "react/jsx-curly-brace-presence": ["off"],
            "react/jsx-curly-newline": ["off"],
            "react/jsx-curly-spacing": ["off"],
            "react/jsx-equals-spacing": ["off"],
            "react/jsx-first-prop-new-line": ["off"],
            "react/jsx-indent": ["off"],
            "react/jsx-indent-props": ["off"],
            "react/jsx-key": ["error"],
            "react/jsx-max-props-per-line": ["off"],
            "react/jsx-newline": ["off"],
            "react/jsx-no-comment-textnodes": ["error"],
            "react/jsx-no-duplicate-props": ["error"],
            "react/jsx-no-target-blank": ["error"],
            "react/jsx-no-undef": ["error"],
            "react/jsx-no-useless-fragment": ["error"],
            "react/jsx-one-expression-per-line": ["off"],
            "react/jsx-pascal-case": ["off"],
            "react/jsx-props-no-multi-spaces": ["off"],
            "react/jsx-sort-props": ["off"],
            "react/jsx-tag-spacing": ["off"],
            "react/jsx-uses-react": ["off"],
            "react/jsx-uses-vars": ["error"],
            "react/jsx-wrap-multilines": ["off"],

            "react/no-children-prop": ["error"],
            "react/no-danger-with-children": ["error"],
            "react/no-deprecated": ["error"],
            "react/no-direct-mutation-state": ["error"],
            "react/no-find-dom-node": ["error"],
            "react/no-is-mounted": ["error"],
            "react/no-multi-comp": [
                "error",
                {
                    ignoreStateless: true,
                },
            ],
            "react/no-render-return-value": ["error"],
            "react/no-string-refs": ["error"],
            "react/no-unescaped-entities": ["error"],
            "react/no-unknown-property": ["error"],
            "react/no-unsafe": ["off"],
            "react/prop-types": ["off"],
            "react/react-in-jsx-scope": ["off"],
            "react/require-render-return": ["error"],
        },
        settings: {
            "import/resolver": {
                node: {
                    extensions: [
                        ".js",
                        ".jsx",
                    ],
                },
            },
            "react": {
                version: "detect",
            },
        },
    },
    {
        files: [
            "**/*.jsx",
            "**/*.tsx",
        ],
        rules: {
            "max-lines-per-function": ["error",
                {
                    max: 120,
                    skipBlankLines: true,
                    skipComments: true,
                }],
        },
    },
];


export default ReactConfigArray;
