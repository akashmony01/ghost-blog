module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#ff1a75", 
      },
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1200px"
      },
    },
    minWidth: {
      'popup': '375px',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
