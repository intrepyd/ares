module.exports = {
  extends: ["./recommended", "next/core-web-vitals"],
  rules: {
    "unicorn/no-null": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/jsx-no-leaked-render": ["error", { validStrategies: ["ternary"] }],
  },
};
