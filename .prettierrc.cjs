module.exports = {
  singleQuote: true,
  printWidth: 100,
  singleAttributePerLine: true,
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: "lf",
  trailingComma: "all",
  arrowParens: "avoid",
  plugins: [import("prettier-plugin-tailwindcss")],
}
