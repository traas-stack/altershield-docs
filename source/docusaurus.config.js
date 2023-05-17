const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */

const i18nConfig = {
  defaultLocale: 'en',
  locales:['en','zh-CN'],
  localeConfigs:{
    en: { label: 'English',path: 'en' },
    'zh-CN': { label: `中文（中国)`,path:'zh-CN' }
  }
}

module.exports = {
  i18n: i18nConfig,
  title: 'AlterShield',
  tagline: 'Open Change Management Specification',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'traas-stack', // Usually your GitHub org/user name.
  projectName: 'AlterShield', // Usually your repo name.
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // path: '/docs',
          routeBasePath: '/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'AlterShield',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {type: 'localeDropdown', position: 'right',},
          {
            href: 'https://github.com/traas-stack/altershield',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} AlterShield.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
