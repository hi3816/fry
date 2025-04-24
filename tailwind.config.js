/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FACC15',   // 노란색 (후라이 컬러!)
          primaryDark: '#CA8A04',
        },
      },
    },
    plugins: [],
  }
