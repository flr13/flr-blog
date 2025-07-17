import { hopeTheme } from 'vuepress-theme-hope';

export default hopeTheme({
  // 主题配置选项
  hostname: 'https://example.com',
  author: {
    name: 'FLR Team',
    url: 'https://example.com'
  },
  iconAssets: 'fontawesome-with-brands',
  logo: '/logo.png',
  repo: 'https://github.com/your-repo',
  docsDir: 'docs',
  pageInfo: ['Author', 'Date', 'Category', 'Tag', 'ReadingTime'],
  blog: {
    description: '一个技术博客',
    intro: '/intro.html',
    medias: {
      GitHub: 'https://github.com/your-repo',
      Email: 'mailto:example@example.com'
    }
  },
  sidebar: 'structure',
  footer: '默认页脚',
  displayFooter: true,
  encrypt: {
    config: {
      '/guide/encrypt.html': ['1234']
    }
  },
  plugins: {
    blog: true,
    comment: {
      provider: 'Giscus',
      repo: 'vuepress-theme-hope/giscus-discussions',
      repoId: 'R_kgDOG_Pt2A',
      category: 'Announcements',
      categoryId: 'DIC_kwDOG_Pt2M4COD69'
    },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue']
      },
      presentation: ['highlight', 'math', 'search', 'notes', 'zoom'],
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended'
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true
    }
  }
});