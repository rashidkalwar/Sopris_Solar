module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      backgroundImage: {
        //image used on login page
        'login-bg': "url('/login-background.png')",
        //image used on register page
        'signup-bg': "url('/signup-background.png')",
      },
    },
    screens: {
      xs: '510px',
      // => @media (min-width: 520px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      ss: '700px',
      // => @media (min-width: 520px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
};
