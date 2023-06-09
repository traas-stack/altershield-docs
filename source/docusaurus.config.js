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
  tagline: 'Change-Related Failures Terminator',
  url: 'https://traas-stack.github.io/',
  baseUrl: '/altershield-docs',
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
        },
        blog: {
          showReadingTime: true,
        },
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
        logo: {
          alt: 'AlterShield',
          src: 'img/logo.png',
        },
        items: [
          {to : '/docs/introduction/what-is-altershield', label: 'Document', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/traas-stack/altershield',
            label: 'GitHub',
            position: 'right',
          },
          {type: 'localeDropdown', position: 'right',},

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Repository',
            items: [
              {
                label: 'AlterShield',
                to: 'https://github.com/traas-stack/altershield',
              },
              {
                label: 'AlterShield-Doc',
                to: 'https://github.com/traas-stack/altershield-docs',
              },
              {
                label: 'AlterShield-Operator',
                to: 'https://github.com/traas-stack/altershield-operator',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                href: 'https://altershield.slack.com/'
              },
              {
                label: 'Email',
                href: 'mailto:altershield.io@gmail.com'
              },
              {
                label: 'Dingtalk Group',
                href: 'https://github.com/traas-stack/altershield/blob/main/docs/dingtalk.png',
              },
              {
                label: 'WeChat Official Account',
                href: 'https://github.com/traas-stack/altershield/blob/main/docs/wechat.jpg',
              },

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/traas-stack/altershield',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AlterShield@AntGroup.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
