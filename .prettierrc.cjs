// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
module.exports = {
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  semi: true,
  arrowParens: 'always',
  trailingComma: 'all',
  endOfLine: 'lf',
  importOrder: [
    '^(react/(.*)$)|^(react$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^types$',
    '^@/types/(.*)$',
    '^@/config/(.*)$',
    '^@/schemas/(.*)$',
    '^@/lib/(.*)$',
    '^@/store/(.*)$',
    '^@/contexts/(.*)$',
    '^@/hooks/(.*)$',
    '^@/components/ui/(.*)$',
    '^@/components/(.*)$',
    '^@/styles/(.*)$',
    '',
    '^[.]',
  ],
  /* rules for prettier-plugin-tailwindcss */
  tailwindFunctions: ['cn', 'twMerge', 'cva'],
  tailwindAttributes: ['class', 'className', '.*[cC]lassName'],
  /* plugins */
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss',
  ],
};
