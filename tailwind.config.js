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
      },

      extend: {
        width: {
          '1/7': '14.2857143%',
          '2/7': '28.5714286%',
          '3/7': '42.8571429%',
          '4/7': '57.1428571%',
          '5/7': '71.4285714%',
          '6/7': '85.7142857%',
        }
      },
      height:{
        'custom': '396.5px',
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
