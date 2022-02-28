const theme = {
  // colors: {
  //   dark: '#000007',
  //   darkestNavy: '#01050b',
  //   darkNavy: '#020c1b',
  //   navy: '#0a192f',
  //   lightNavy: '#172a45',
  //   darkGrey: '#333f58',
  //   mediumGrey: '#2d3952',
  //   blueGrey: '#293d5a',
  //   grey: '#4c5772',
  //   lightGrey: '#606a86',

  //   lightSlate: '#a8b2d1',
  //   lightestSlate: '#ccd6f6',
  //   offWhite: '#dce7ff',
  //   white: '#e6f1ff',
  //   pink: '#FF647F',
  //   yellow: '#FFC464',
  //   leetcode: '#e8804d',
  //   orange: '#FF9E64',
  //   green: '#64ffda',
  //   blue: '#71AFFF',
  //   darkBlue: '#1D7FFC',
  //   highlight: 'rgba(41, 61, 90, 0.99)',
  //   transGreen: 'rgba(100, 255, 218, 0.07)',
  //   transNavy: 'rgba(10, 25, 47, 0.7)',
  //   shadowNavy: 'rgba(2, 12, 27, 0.9)',
  // },
  colors_option_b: {
    dark: '#000008',
    darkestNavy: '#0288d1',
    darkNavy: '#29b6f6',
    vanillaDarkNavy: '#020c1b',
    navy: '#1f1d1d',
    darkGrey: '#388e3c',
    mediumGrey: '#66bb6a',
    vanillaMediumGrey: '#2d3952',
    blueGrey: '#293d5a',
    grey: '#81c784',
    vanillaGreen: '#64ffda',
    slate: '#e3f2fd',
    lightSlate: '#f3e5f5',
    lightestSlate: '#ffffcc',
    vanillaSlate: '#8892b0',
    vanillaLightSlate: '#a8b2d1',
    offWhite: '#dce7ff', //no change from og
    white: '#e6f1ff', // no change from og
    pink: '#FF647F',
    yellow: '#fcba03',
    red: '#e60e2b',
    orange: '#FF9E64',
    vanillaLeetcode: '#e8804d',
    green: '#64ffda', //no change from og
    blue: '#71AFFF',
    darkBlue: '#1D7FFC',

    highlight: 'rgba(222, 0, 222, 0.99)',
    transGreen: 'rgba(110, 245, 208, 0.07)',
    vanillaTransGreen: 'rgba(100, 255, 218, 0.07)',
    transNavy: 'rgba(20, 50, 90, 0.7)',
    vanillaTransNavy: 'rgba(10, 25, 47, 0.7)',
    shadowNavy: '#2b2824',
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xsmall: '12px',
    smallish: '13px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xlarge: '20px',
    xxlarge: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '2px',
  headerHeight: '100px',
  headerScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
};

export default theme;
