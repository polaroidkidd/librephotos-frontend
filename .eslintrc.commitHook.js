module.exports = {
  extends: [require.resolve("./.eslintrc.js")],
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-for-in-array": "warn",
    "no-implied-eval": "off",
    "@typescript-eslint/no-implied-eval": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",
    "require-await": "off",
    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/adjacent-overload-signatures": "warn",
    "@typescript-eslint/array-type": [
      "warn",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/class-literal-property-style": "warn",
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
    "@typescript-eslint/consistent-type-assertions": "warn",
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-function-return-type.md#configuring-in-a-mixed-jsts-codebase
    "@typescript-eslint/explicit-function-return-type": "off",
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md#configuring-in-a-mixed-jsts-codebase
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-base-to-string": "warn",
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-empty-interface": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "warn",

    "@typescript-eslint/no-inferrable-types": "warn",
    "@typescript-eslint/no-misused-new": "warn",
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "@typescript-eslint/no-require-imports": "warn",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-qualifier": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",

    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-useless-empty-export": "warn",
    "@typescript-eslint/no-var-requires": "warn",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/prefer-enum-initializers": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",
    "@typescript-eslint/prefer-namespace-keyword": "warn",
    "@typescript-eslint/prefer-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-optional-chain": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-regexp-exec": "warn",
    "@typescript-eslint/prefer-return-this-type": "warn",
    "@typescript-eslint/prefer-string-starts-ends-with": "warn",
    "@typescript-eslint/promise-function-async": [
      "warn",
      {
        allowedPromiseNames: ["Thenable"],
        checkArrowFunctions: true,
        checkFunctionDeclarations: true,
        checkFunctionExpressions: true,
        checkMethodDeclarations: true,
      },
    ],
    "@typescript-eslint/require-array-sort-compare": [
      "warn",
      {
        ignoreStringArrays: false,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "warn",
      {
        allowNumber: true,
        allowBoolean: false,
        allowAny: false,
        allowNullish: false,
        allowRegExp: false,
      },
    ],
    "@typescript-eslint/sort-type-union-intersection-members": "warn",
    "@typescript-eslint/strict-boolean-expressions": [
      "warn",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/type-annotation-spacing": "warn",
    "@typescript-eslint/typedef": [
      "warn",
      {
        arrayDestructuring: false,
        arrowParameter: false,
        memberVariableDeclaration: false,
        objectDestructuring: false,
        parameter: false,
        propertyDeclaration: false,
        variableDeclaration: false,
        variableDeclarationIgnoreFunction: false,
      },
    ],
    "@typescript-eslint/unified-signatures": "warn",
    // note you must disable the base rule as it can report incorrect warns
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "warn",
    // note you must disable the base rule as it can report incorrect warns
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["warn", "never"],
    "init-declarations": "off",
    "@typescript-eslint/init-declarations": "warn",
    // note you must disable the base rule as it can report incorrect warns
    "lines-between-class-members": "off",
    "@typescript-eslint/lines-between-class-members": ["warn", "always", { exceptAfterOverload: false }],
    "@typescript-eslint/no-array-constructor": "warn",
    "@typescript-eslint/no-dupe-class-members": "warn",
    "@typescript-eslint/no-duplicate-imports": "warn",
    "@typescript-eslint/no-empty-function": "warn",
    "@typescript-eslint/no-extra-parens": "warn",
    "@typescript-eslint/no-extra-semi": "warn",
    "@typescript-eslint/no-invalid-this": "warn",
    "@typescript-eslint/no-loop-func": "warn",
    "@typescript-eslint/no-loss-of-precision": "warn",
    "@typescript-eslint/no-redeclare": "warn",
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-throw-literal": "warn",
    "@typescript-eslint/no-unused-expressions": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-use-before-define": "warn",
    "@typescript-eslint/no-useless-constructor": "warn",
    // note you must disable the base rule as it can report incorrect warns
    "padding-line-between-statements": "off",
    "@typescript-eslint/padding-line-between-statements": [
      "warn",
      {
        blankLine: "always",
        prev: "*",
        next: ["interface", "type"],
      },
    ],
    quotes: "off",
    "@typescript-eslint/quotes": ["warn", "double"],
    "@typescript-eslint/return-await": "warn",
    // note you must disable the base rule as it can report incorrect warns
    semi: "off",
    "@typescript-eslint/semi": "warn",
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/consistent-type-exports": ["warn", { fixMixedExportsWithInlineTypeSpecifier: false }],
    "@typescript-eslint/ban-tslint-comment": "warn",
    "@typescript-eslint/ban-ts-comment": "warn",
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-invalid-void-type": "warn",
    "import/no-extraneous-dependencies": [
      "warn",
      { devDependencies: ["**/*.test.ts", "**/*.test.tsx", "**/setupTests.ts"] },
    ],
    "import/no-duplicates": "warn",
    "import/no-named-as-default": "warn",
    "react/no-deprecated": "warn",
    "react/button-has-type": "warn",
    "react/no-access-state-in-setstate": "warn",
    "react/prefer-stateless-function": "warn",
    "react/jsx-no-target-blank": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "warn",
    "react/no-render-return-value": "warn",
    "no-useless-concat": "warn",
    "prefer-promise-reject-errors": "warn",
    "no-await-in-loop": "warn",
    "no-return-assign": "warn",
    "no-param-reassign": "warn",
    "no-restricted-globals": "warn",
    "no-var": "warn",
    "vars-on-top": "warn",
    "no-promise-executor-return": "warn",
    "no-extend-native": "warn",
    "no-bitwise": "warn",
    "no-restricted-properties": "warn",
    "prefer-rest-params": "warn",
    "array-callback-return": "warn",
    "require-yield": "warn",
    "import/export": "warn",
    "no-restricted-syntax": "warn",
    "consistent-return": "warn",
    "guard-for-in": "warn",
    "no-prototype-builtins": "warn",
    "import/first": "warn",
    radix: "warn",
    "import/no-default-export": "warn",
    "no-class-assign": "warn",
    "react/prop-types": "warn",
    "react/jsx-key": "warn",
    "no-undef": "warn",
    "react/no-unescaped-entities": "warn",
    "no-redeclare": "warn",
    "no-extra-boolean-cast": "off",
    "no-console": "warn",
  },
};
