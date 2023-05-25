const math = require('remark-math')
const katex = require('rehype-katex')
require('dotenv').config()

module.exports = {
  customFields: {
    // Analytics proxy URL
    analyticsProxyUrl: process.env.REACT_APP_AMPLITUDE_PROXY_URL,
    // Determines if staging env
    stagingEnv: process.env.REACT_APP_STAGING,
    // From node
    nodeEnv: process.env.NODE_ENV,
  },
  title: 'Pegasys',
  tagline: 'Documentation and Guides',
  url: 'https://docs.pegasys.fi/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/pegasys.png',
  organizationName: 'Pegasys-fi', // Usually your GitHub org/user name.
  projectName: 'Pegasys-fi-docs', // Usually your repo name.
  themeConfig: {
    image: 'img/twitter_card_bg.jpg',
    prism: {
      additionalLanguages: ['solidity'],
    },
    algolia: {
      apiKey: '32465e2ab6f7554ff014e64c0d92171c',
      indexName: 'v1-docs',
      appId: 'S0IDD0YGLZ',
    },
    navbar: {
      title: 'Pegasys-fi Docs',
      logo: {
        alt: 'Pegasys-fi Unicorn',
        src: 'img/logoPegasys.svg',
      },
      items: [
        {
          to: '/concepts/overview',
          label: 'Concepts',
          position: 'left',
          className: 'V1_active',
        },
        {
          to: '/contracts/v1/overview',
          label: 'Contracts',
          position: 'left',
          className: 'V1_active',
        },
        {
          to: '/sdk/v1/overview',
          label: 'SDKs',
          position: 'left',
          className: 'V1_active',
        },
        {
          to: '/api/subgraph/overview',
          label: 'APIs',
          position: 'left',
          className: 'V1_active',
        },
        {
          label: 'Give Feedback',
          to: 'https://forms.gle/13XtjmkwdXQ2jMn26',
          position: 'right',
          className: 'persistent',
        },
        {
          label: 'Whitepaper',
          to: 'https://uniswap.org/whitepaper-v3.pdf',
          position: 'right',
          className: 'persistent',
        },
        {
          href: 'https://github.com/pegasys-fi/docs',
          label: 'GitHub',
          position: 'right',
          className: 'persistent',
        },
        // {
        //   href: 'https://unigrants.org/',
        //   label: 'Grants',
        //   position: 'right',
        //   className: 'persistent',
        // },
      ],
    },
    footer: {
      // style: "dark",
      links: [
        {
          title: 'Developers',
          items: [
            // {
            //   label: 'Feedback',
            //   href: 'https://forms.gle/13XtjmkwdXQ2jMn26',
            // },
            // {
            //   label: 'Bug Bounty',
            //   href: 'https://github.com/Pegasys-fi/v1-periphery/blob/main/bug-bounty.md',
            // },
            {
              label: '#dev-chat',
              href: 'https://discord.com/invite/UzjWbWWERz',
            },
            {
              label: 'Whitepaper',
              href: 'https://uniswap.org/whitepaper-v3.pdf',
            },
          ],
        },
        {
          title: 'Github',
          items: [
            {
              label: 'v1-core',
              href: 'https://github.com/Pegasys-fi/v1-core',
            },
            {
              label: 'v1-sdk',
              href: 'https://github.com/Pegasys-fi/v1-sdk',
            },
            // {
            //   label: 'v1-periphery',
            //   href: 'https://github.com/Pegasys-fi/v1-periphery',
            // },
            // {
            //   label: 'Deployment addresses',
            //   href: 'https://github.com/Pegasys-fi/v1-periphery/blob/main/deploys.md',
            // },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'Home',
              href: 'https://pegasys.fi/',
            },
            {
              label: 'App',
              href: 'https://app.pegasys.fi/',
            },
            {
              label: 'Analytics',
              href: 'https://info.pegasys.fi/home',
            },
            // {
            //   label: 'Token Lists',
            //   href: 'https://tokenlists.org/',
            // },
            // {
            //   label: 'Brand Assets',
            //   href: 'https://uniswap.org/Uniswap_brand_assets.zip',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Governance',
            //   href: 'https://gov.pegasys.fi/',
            // },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/UzjWbWWERz',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/PegasysDEX',
            },
            // {
            //   label: 'Blog',
            //   href: 'https://pegasys.fi/blog/',
            // },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          id: 'contracts',
          path: 'docs/contracts',
          routeBasePath: 'contracts/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          editUrl: 'https://github.com/pegasys-fi/docs/tree/main/',
          includeCurrentVersion: true,
        },
        blog: {
          remarkPlugins: [math],
          rehypePlugins: [katex],
          path: 'blog/',
          blogTitle: 'Engineering Blog',
          blogSidebarCount: 0,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          customCss2: require.resolve('./src/css/colors.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
  plugins: [
    ['@saucelabs/theme-github-codeblock', {}],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'sdk',
        path: 'docs/sdk',
        routeBasePath: 'sdk',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        includeCurrentVersion: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'api',
        path: 'docs/api',
        routeBasePath: 'api/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        includeCurrentVersion: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'concepts',
        path: 'docs/concepts',
        routeBasePath: 'concepts/',
        remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }]],
        includeCurrentVersion: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          // 1/9/23 V1 SDK Guide Redirects
          {
            to: '/sdk/v1/guides/background',
            from: '/sdk/v1/guides/quick-start',
          },
          {
            to: '/sdk/v1/guides/quoting',
            from: ['/sdk/v1/guides/creating-a-pool', '/sdk/v1/guides/fetching-prices'],
          },
          {
            to: '/sdk/v1/guides/trading',
            from: '/sdk/v1/guides/creating-a-trade',
          },
          {
            to: '/sdk/v1/guides/routing',
            from: '/sdk/v1/guides/auto-router',
          },
          {
            to: '/sdk/v1/guides/liquidity/modifying-position',
            from: ['/sdk/v1/guides/liquidity/adding', '/sdk/v1/guides/liquidity/removing'],
          },
        ],
        createRedirects(existingPath) {
          // V1 Redirects
          if (existingPath.includes('/concepts/overview')) {
            return [existingPath.replace('/concepts/overview', '/protocol/introduction')]
          }
          if (existingPath.includes('/contracts/v1/reference')) {
            return [existingPath.replace('/contracts/v1/reference', '/protocol/reference')]
          }
          if (existingPath.includes('/contracts/v1/guides')) {
            return [existingPath.replace('/contracts/v1/guides', '/protocol/guides')]
          }
          // V1 Redirects
          if (existingPath.includes('/contracts/v1/reference')) {
            return [existingPath.replace('/contracts/v1/reference', '/protocol/V1/reference')]
          }
          if (existingPath.includes('/contracts/v1/guides')) {
            return [existingPath.replace('/contracts/v1/guides', '/protocol/V1/guides')]
          }
          // Permit2 Redirects
          if (existingPath.includes('/contracts/permit2')) {
            return [existingPath.replace('/contracts/permit2', '/protocol/permit2')]
          }
          // v1-sdk Redirects
          if (existingPath.includes('/sdk/v1/overview')) {
            return [existingPath.replace('/sdk/v1/overview', '/sdk/introduction')]
          }
          if (existingPath.includes('/sdk/v1/guides')) {
            return [existingPath.replace('/sdk/v1/guides', '/sdk/guides')]
          }
          // swap-widgets Redirects
          if (existingPath.includes('/sdk/swap-widget/overview')) {
            return [existingPath.replace('/sdk/swap-widget/overview', '/sdk/widgets/swap-widget')]
          }
          if (existingPath.includes('/sdk/swap-widget/reference/v1')) {
            return [existingPath.replace('/sdk/swap-widget/reference/v1', '/sdk/widgets/swap-widget/api')]
          }
          if (existingPath.includes('/concepts')) {
            return [existingPath.replace('/concepts', '/protocol/concepts')]
          }

          // Return a falsy value: no redirect created
          return undefined
        },
      },
    ],
  ],
}
