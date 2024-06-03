module.exports = {
  siteTitle: 'Anjali Srivastava | Computer Science Graduate | Software Developer | Cloud Engineer | DevOps Engineer | ML Engineer',
  siteDescription:
    'Anjali Srivastava is a Computer Science Graduate from Arizona State University, who loves learning new things.',
  siteKeywords:
    'Anjali Srivastava, Anjali, Srivastava, AnjaliSrivastava29, software developer, software engineer, cloud engineer, devops engineer, ml engineer, web developer, python developer, fox, aws cic,  aws, cic, bangalore, ibm, iiit, iiitdmj',
  siteUrl: 'https://AnjaliSrivastava29.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'abcd',
  googleVerification: 'abcd',
  name: 'Anjali Srivastava',
  location: 'Tempe, Arizona',
  email: 'asriva86@asu.edu',
  github: 'https://github.com/AnjaliSrivastava29',
  twitterHandle: '',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/AnjaliSrivastava29',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/anjalisrivastava/',
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
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
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
