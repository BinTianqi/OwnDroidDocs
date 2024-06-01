import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OwnDroid",
  description: "Wiki of OwnDroid",
  base: '/',
  srcExclude: [ 'README.md' ],
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/' }
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: '开始', link: '/guide/' },
	      { text: '权限', link: '/guide/Permission' },
	      { text: '系统', link: '/guide/SystemManager' },
	      { text: '网络', link: '/guide/Network' },
	      { text: '工作资料', link: '/guide/ManagedProfile' },
	      { text: '应用管理', link: '/guide/ApplicationManager' },
	      { text: '用户限制', link: '/guide/UserRestriction' },
	      { text: '用户管理', link: '/guide/UserManager' },
	      { text: '密码与锁屏', link: '/guide/Password' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BinTianqi/OwnDroid' }
    ]
  }
})
