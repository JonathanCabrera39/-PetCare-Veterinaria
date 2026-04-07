export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
      },
      borderRadius: {
        'card': '12px',
      },
      boxShadow: {
        'elevation-2': '0 2px 8px rgba(0, 0, 0, 0.1)',
        'elevation-4': '0 4px 16px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}