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
        times: ['"Times New Roman"', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        volkhov: ["Volkhov", 'serif'],
        raleway: ['Raleway', 'serif'],
      },
      colors: {
        emas: "#BC9749",
        birdong: "#1A2D3B",
        abu: "#DDDDDD",
        emasTua: "#836B24",
        biruGelap: "#0F2230",
        hijaugelap: "#132A13",
        cklt: "#80522C"
      }
    },
  },
  plugins: [],
}

