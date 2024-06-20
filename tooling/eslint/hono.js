/** @type {import("eslint").Linter.Config} */
const config = {
  extends: ["@hono/eslint-config"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    semi: ["error", "always"],
  },
};

module.exports = config;
