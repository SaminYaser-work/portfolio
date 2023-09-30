/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        oneblack: '#282C34',
        onewhite: '#abb2bf',
        onelightred: '#e06c75',
        onedarkred: '#be5046',
        onegreen: '#98c379',
        onelightyellow: '#e5c07b',
        onedarkyellow: '#d19a66',
        oneblue: '#61afef',
        onemagenta: '#c678dd',
        onecyan: '#56b6c2',
        onegrey1: '#4b5263',
        onegrey2: '#5c6370',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: ['class', '.darkmode'],
}
