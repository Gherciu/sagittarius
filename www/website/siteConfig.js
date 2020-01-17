const users = [
  {
    caption: 'sagittarius',
    image: 'https://raw.githubusercontent.com/Gherciu/sagittarius/master/logo.png',
    infoLink: 'https://github.com/Gherciu/sagittarius',
    pinned: true,
  },
  {
    caption: 'redux-soldier',
    image: 'https://raw.githubusercontent.com/Gherciu/redux-soldier/master/logo.png',
    infoLink: 'https://github.com/Gherciu/redux-soldier',
    pinned: true,
  },
  {
    caption: 'react-grapnel',
    image: 'https://raw.githubusercontent.com/Gherciu/react-grapnel/master/logo.png',
    infoLink: 'https://github.com/Gherciu/react-grapnel',
    pinned: true,
  },
];

const repoName = 'multipack'
const siteConfig = {
  title: repoName.charAt(0).toUpperCase() + repoName.slice(1), // Title for your website.
  tagline: 'A monorepo template repository',
  url: 'https://gherciu.github.io', // Your website URL
  baseUrl: `/${repoName}/`, // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: repoName,
  organizationName: 'Gherciu',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'doc-getting-started', label: 'Getting Started'},
    {doc: 'doc-api-reference', label: 'API'},
    {blog: true, label: 'Blog'},
    {href: `https://github.com/Gherciu/${repoName}`, label: 'GitHub'},
  ],

  // package features
  features: [
    {
      content: 'ESLint and Prettier to enforce code style.',
      title: 'Preconfigured code linters',
    },
    {
      content: 'Preconfigured Jest and react-testing-library to test (ts|tsx) files and colect coverage from all packages',
      title: 'Test development driven',
    },
    {
      content: 'Preconfigured Github workflow actions to run tests after each pushed commit',
      title: 'Continuous integration',
    },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/logo.png',

  /* Colors for website */
  colors: {
    primaryColor: '#20232A',
    secondaryColor: '#282C34',
  },

  // Add or not scroll to top button
  scrollToTop: true,

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} `,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // edit docs url
  editUrl: `https://github.com/Gherciu/${repoName}/edit/master/www/docs/`,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo`s URL...
    repoUrl: `https://github.com/Gherciu/${repoName}`,

  // repo author info
  author: {
    name: 'Gherciu Gheorghe',
    url: 'https://gherciu.github.io'
  }
};

module.exports = siteConfig;
