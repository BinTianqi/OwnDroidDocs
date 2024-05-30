import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OwnDroid",
  description: "Wiki of OwnDroid",
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/start' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Start', link: '/guide/start' },
	  { text: 'Permission', link: '/guide/Permission' },
	  { text: 'System manager', link: '/guide/SystemManager' },
	  { text: 'Network', link: '/guide/Network' },
	  { text: 'Managed profile', link: '/guide/ManagedProfile' },
	  { text: 'Application manager', link: '/guide/ApplicationManager' },
	  { text: 'User restriction', link: '/guide/UserRestriction' },
	  { text: 'User manager', link: '/guide/UserManager' },
	  { text: 'Password and keyguard', link: '/guide/Password' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BinTianqi/OwnDroid' }
    ]
  }
})
