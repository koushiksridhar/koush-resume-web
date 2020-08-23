module.exports = {
  siteTitle: 'Swadha Rai | Software Engineer',
  siteDescription:
    'Swadha Rai is a software engineer based in Chapel Hill, NC. She has an interest in full stack development, data science, business, and social good.',
  siteKeywords:
    'Swadha Rai, Swadha, Rai, computer science, statistics, srai, swadharai, software engineer, front-end engineer, web developer, javascript, unc chapel hill',
  siteUrl: 'https://swadharai.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Swadha Rai',
  location: 'Chapel Hill, NC',
  email: 'rai.swadha@gmail.com',
  github: 'https://github.com/swadharai',
  twitterHandle: '@swadharai',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/swadharai',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/swadharai',
    },

    {
      name: 'Instagram',
      url: 'https://www.instagram.com/swadharai',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/swadharai',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#340068',
    navy: '#0a192f',
    darkIndigo: '#020c1b',
  },

  srConfig: (delay = 200) => ({
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
  }),
};
