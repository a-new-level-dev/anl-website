module.exports = {
   arrowParens: 'avoid',
   bracketSameLine: false,
   bracketSpacing: true,
   embeddedLanguageFormatting: 'auto', // formats quoted code embedded in the file (e.g. markdown code blocks)
   endOfLine: 'lf',
   htmlWhitespaceSensitivity: 'css',
   insertPragma: false,
   jsxBracketSameLine: false,
   jsxSingleQuote: false,
   printWidth: 100,
   proseWrap: 'never', // this prevents `.md` files from being word wrapped
   quoteProps: 'consistent',
   requirePragma: false,
   semi: true,
   singleQuote: true,
   tabWidth: 3,
   trailingComma: 'all',
   useTabs: false,
   plugins: ['prettier-plugin-tailwindcss'],
};
