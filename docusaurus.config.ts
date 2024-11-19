import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'EasyHSV',
  tagline: 'Easiest way to add HSV coloring to your VRChat Avatar',
  favicon: 'img/icon.png',

  // Set the production url of your site here
  url: 'https://dreadrith.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'dreadrith', // Usually your GitHub org/user name.
  projectName: 'Documentation-EasyHSV', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Dreadrith/Documentation-EasyHSV',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Dreadrith/Documentation-EasyHSV',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EasyHSV Docs',
      logo: {
        alt: 'EasyHSV Icon',
        src: 'img/icon.png'
      },
      items: [
        {
          href: 'https://dreadrith.gumroad.com/l/easyhsv',
          label: 'Buy on Gumroad',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'DreadScripts',
          items: [
			{
			  label: 'Ko-fi',
			  href: 'https://ko-fi.com/dreadrith'
			},
			{
              label: 'Gumroad',
              href: 'https://dreadrith.gumroad.com/',
            },
            {
              label: 'VPM Listing',
              href: 'https://vpm.dreadscripts.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Dreadrith',
            },
            {
              label: 'Youtube',
              href: 'https://www.youtube.com/@DreadScripts',
            },
			{
				label: 'Send Feedback',
				href: 'https://dreadscripts.canny.io/'
			},
			{
				label: 'More Links',
				href: 'https://dreadrith.com/links'
			}
          ],
        },
        {
          title: 'Socials',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/CgXxjR5',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/Dreadrith',
            },
            {
              label: 'Bluesky',
              href: 'https://bsky.app/profile/dreadrith.bsky.social',
            },
            {
              label: 'VRChat',
              href: 'https://vrchat.com/home/user/usr_8a94458a-05d3-4c98-bca6-cc272667081a',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DreadScripts, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
