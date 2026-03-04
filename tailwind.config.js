module.exports = {
  content: [
    './layout/*.liquid',
    './templates/**/*.{liquid,json}',
    './sections/*.liquid',
    './snippets/*.liquid',
    './assets/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        brand: ['Roboto', 'system-ui', '-apple-system', 'Segoe UI', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
