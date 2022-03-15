

const siteConfig = {
  title: 'GroceriStar Fetch Module' /* title for your website */,
  tagline: 'Documentation',
  //url: 'https://your-docusaurus-test-site.com' /* your website url */,
  //baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
     url: 'https://groceristar.github.io',
     baseUrl: '/static-food-data-documentation/',

  // Used for publishing and more
  projectName: 'static-food-data-documentation',
  organizationName: 'groceristar',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
     {doc: 'summary', label: 'Summary'},
       {href : 'https://github.com/GroceriStar/groceristar-fetch/', label: 'GitHub'},
    {page: 'help', label: 'Help'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  // https://raw.githubusercontent.com/GroceriStar/creative/master/logo/LOGO1.png
  headerIcon: 'img/LOGO1.png',
  footerIcon: 'img/LOGO1.png',
  favicon: 'img/LOGO1.png',

  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },


  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' GroceriStar company',

 

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
    repoUrl: 'https://github.com/GroceriStar/groceristar-fetch',
};

