const isVercel = process.env.DISABLE_ESLINT_RULES === "true";

module.exports = {
  env: {
    node: true, // Add this line to specify Node.js environment
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
  },
};