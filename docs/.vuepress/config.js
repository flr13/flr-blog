import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  // 网站标题
  title: 'FLR Blog',
  // 网站描述
  description: '这是一个 FLR 博客网站',
  theme: defaultTheme({
    // 导航栏配置
    navbar: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文章',
        children: [
          {
            text: '前端react技术',
            link: '/posts/react/'
          },
          {
            text:'单点登陆',
            link: '/posts/SSO/'
          }
        ]
      },
      {
        text: '关于',
        link: '/about/'
      }
    ],
    // 侧边栏配置
    sidebar: {
      '/posts/tech/': [
        {
          text: '前端技术',
          children: [
            '/posts/tech/frontend/vue.md',
            '/posts/tech/frontend/react.md'
          ]
        },
        {
          text: '后端技术',
          children: [
            '/posts/tech/backend/nodejs.md',
            '/posts/tech/backend/python.md'
          ]
        }
      ],
      '/posts/life/': [
        {
          text: '日常记录',
          children: [
            '/posts/life/daily/20250710.md',
            '/posts/life/daily/20250715.md'
          ]
        }
      ],
      '/about/': [
        {
          text: '关于我们',
          children: [
            '/about/team.md',
            '/about/contact.md'
          ]
        }
      ]
    },
    // 页脚配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present FLR Team'
    },
    // 编辑链接配置
    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    // 最后更新时间配置
    lastUpdated: {
      text: '最后更新时间'
    },
    // 作者配置
    contributors: {
      text: '贡献者'
    }
  })
})