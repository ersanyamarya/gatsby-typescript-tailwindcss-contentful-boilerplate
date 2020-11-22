module.exports = {
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      primary: {
        light: '#DCEDC8',
        default: '#8BC34A',
        dark: '#689F38',
      },
      accent: {
        light: '#F0F4C3',
        default: '#CDDC39',
        dark: '#AFB42B',
      },
      back: {
        light: '#FFF',
        default: '#EEEEEE',
        dark: '#FBFBFB',
      },
    },
    extend: {
      spacing: {
        half: '0.5vh',
        100: '24rem',
      },
      borderWidth: {
        3: '3px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
