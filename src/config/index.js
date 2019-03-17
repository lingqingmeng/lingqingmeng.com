module.exports = {
  siteTitle: 'Ling Qing Meng | Speaker, Engineer, Entrepreneur',
  siteDescription:
    'Ling Qing Meng is an entrepreneur, investor and software engineer based in San Francisco, CA who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Ling Qing Meng, Ling Qing, Meng, lingqingmeng, entrepreneur, software engineer, front-end engineer, blockchain engineer, nodejs, umn, rust',
  siteUrl: 'https://lingqingmeng.com',
  siteLanguage: 'en_US',
  name: 'Ling Qing Meng',
  location: 'San Francisco, CA',
  email: 'ling.q.meng@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/lingqingmeng/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/lingqingmeng/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/lingqingmeng/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lingqingmeng/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/lingqingmeng',
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

  googleVerificatino: '6sWFAYxVRjcZIj568rtimRaEsmce8cDIRSk3YLutZxI',
  headerHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

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
