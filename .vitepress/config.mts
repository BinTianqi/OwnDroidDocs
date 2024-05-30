import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OwnDroid",
  description: "Wiki of OwnDroid",
  base: '/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/Guide' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Guide', link: '/Guide' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BinTianqi/OwnDroid' }
    ]
  }
})
