module.exports = {
  siteTitle: 'Pairing - Blockchain SDK and Node Provider',
  siteDescription: 'Site Description goes here',
  siteKeywords: 'substrate, polkadot, nodejs, rust',
  siteUrl: 'https://lingqingmeng.com',
  siteLanguage: 'en_US',
  name: 'Ling Qing Meng',
  location: 'San Francisco, CA',
  email: 'contact@lingqingmeng.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/decentral-foundation/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lingqingmeng/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lingqingmeng/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/lingqingm',
    },
  ],

  nav: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  twitterHandle: '@lingqingmeng',
  googleAnalyticsID: 'UA-37317196-4',

  googleVerification: '6sWFAYxVRjcZIj568rtimRaEsmce8cDIRSk3YLutZxI',
  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#1f1d1d',
  darkNavyColor: '#f7f0eb',
  armColor: '#a2466c',
  eeColor: '#f7f0eb',

  srConfig: (delay = 200) => {
    return {
      origin: 'bottom',
      distance: '20px',
      duration: 500,
      delay,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: true,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    };
  },
};
