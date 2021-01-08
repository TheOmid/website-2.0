module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
      backgroundColor: theme => ({
       ...theme('colors'),
       'body': '#FDFDFD',
       'footer': '#F0F0F0',
       'button': '#ECC259',
       'spotify': '7ab800',
      }),
      
      textColor: {
        'primary': '#212222',
        'secondary': '#8A8769',
        'gold': '#ECC259',
        'linkedin': '#0976b4',
        'github': '#333',
        'twitter': '#55acee',
        'spotify': '7ab800',
      },

      borderRadius: {
        'custom': '20px',
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
