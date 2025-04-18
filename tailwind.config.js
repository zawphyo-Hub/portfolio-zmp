module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: 'white',
        secondary: 'black',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        // card: '0 35px 120px -15px #211e35',
        card: '0 35px 120px -15pxrgb(95, 95, 95)',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': `url(/herobg.jpg)`,
      },
    },
  },
  plugins: [],
};
