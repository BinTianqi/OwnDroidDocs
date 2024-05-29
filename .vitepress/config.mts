import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OwnDroid",
  description: "Wiki of OwnDroid",
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/start' }
    ],

    sidebar: [
      {
        text: 'Start',
        items: [
          { text: 'Start', link: '/start' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BinTianqi/OwnDroid' }
    ]
  }
})
