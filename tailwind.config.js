module.exports = {
  content: [
    './src/**/*.{html,md,liquid,erb,serb}',
    './frontend/javascript/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Laila', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      }
    },
  },
  plugins: [],
}
