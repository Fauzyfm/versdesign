/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "merahMaroon" : "#641623",
        "merahMuda" : "#F0CDD3"
      },
      fontFamily: {
        garamond: ['"EB Garamond"', 'serif'],
        sacramento: ['Sacramento', 'cursive'],
        times: ['"Times New Roman"', 'serif'],
        nautigal: ['"The Nautigal"', 'cursive']
      },
    },
  },
  plugins: [],
}
