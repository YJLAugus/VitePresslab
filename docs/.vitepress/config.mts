import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "深度编程实验室",
   head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  description: "A VitePress Site",
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    editLink: {
      pattern: 'https://github.com/YJLAugus/VitePresslab/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '新闻', link: '/news' },
      {
        text: '实验室',
        items: [
          { text: '成果', link: '/markdown-examples' },
          { text: '组员介绍', link: '/team' },
          { text: '组内活动', link: '/markdown-examples' }
        ]
      }
    ],

    sidebar: [
      {
        text: '关于实验室',
        collapsed: false,
        items: [
          { text: '关于', link: '/about' },
          { text: '研究方向', link: '/research' }
        ]
      },
      {
        text: '组员介绍',
        collapsed: false,
        items: [
          { text: '团队', link: '/team' }
          
        ]
      },
      {
        text: '最新消息',
        collapsed: false,
        items: [
          { text: '竞赛获奖🥇', link: '/awards' },
          { text: '奖励提升💡', link: '/reward' },
          { text: '大事件⚡️', link: '/news' }
        ]
      },
      {
        text: '组内活动',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
      
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 深度编程实验室（DeepCodeLab）'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
