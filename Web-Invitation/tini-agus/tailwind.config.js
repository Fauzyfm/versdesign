/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",'./index.html'],
  theme: {
    extend: {
      fontFamily: {
        judul : "Playball",
        cinzel : "Cinzel",
        inter : "Inter",
        ebGarmond: "EB+Garamond",
      },
      colors: {
        emas: "#B79A4B",
        birdong: "#213549",
        abu: "#DDDDDD",
        emasTua: "#836B24",
        biruGelap: "#040A16",
        hijaugelap: "#132A13",
      }
    },
  },
  plugins: [],
}

