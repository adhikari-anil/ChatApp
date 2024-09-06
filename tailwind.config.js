/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-yellow': '1px 1px 20px black',
      },
    },
  },
  plugins: [],
}


// classes: {
//   'class1': "end",
//   'class2': "start"
// }