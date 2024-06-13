import { createRequire } from 'module'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  description: '一个安卓系统的设备策略管理应用',

  themeConfig: {
    nav: [
      { text: '指南', link: '/zh_CN/start' }
    ],

    lastUpdatedText: '最后更新',

    sidebar: {
      '/zh_CN/': [
        {
          text: 'Guide',
          items: [
            { text: '开始', link: '/zh_CN/start' },
            { text: '权限', link: '/zh_CN/Permission' },
            { text: '系统', link: '/zh_CN/SystemManager' },
            { text: '网络', link: '/zh_CN/Network' },
            { text: '工作资料', link: '/zh_CN/ManagedProfile' },
            { text: '应用管理', link: '/zh_CN/ApplicationManager' },
            { text: '用户限制', link: '/zh_CN/UserRestriction' },
            { text: '用户管理', link: '/zh_CN/UserManager' },
            { text: '密码与锁屏', link: '/zh_CN/Password' },
            { text: '常见问题', link: '/zh_CN/FAQ' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BinTianqi/OwnDroid' }
    ],
  }
})
