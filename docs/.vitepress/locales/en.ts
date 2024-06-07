import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  description: 'A Device policy controller app for Android',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/zh_CN/start' }
    ],

    lastUpdatedText: 'Last updated',

    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Start', link: '/start' },
            { text: 'Permission', link: '/Permission' },
            { text: 'System manager', link: '/SystemManager' },
            { text: 'Network', link: '/Network' },
            { text: 'Managed profile', link: '/ManagedProfile' },
            { text: 'Application manager', link: '/ApplicationManager' },
            { text: 'User restriction', link: '/UserRestriction' },
            { text: 'User manager', link: '/UserManager' },
            { text: 'Password', link: '/Password' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BinTianqi/OwnDroid' }
    ],
  }
})
