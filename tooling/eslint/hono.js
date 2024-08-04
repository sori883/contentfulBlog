/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@hono/eslint-config"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    semi: ["error", "always"],
    // interfaceを使いたいためOffにする
    "@typescript-eslint/prefer-function-type": "off",
  },
};

module.exports = config;
