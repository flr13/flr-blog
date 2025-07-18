import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
// 将CommonJS的require替换为ESM的import语法
import * as fs from 'fs';
import * as path from 'path';

// 读取分类数据
const categoryDataPath = path.resolve(__dirname, 'category-data.json');
const categoryData = JSON.parse(fs.readFileSync(categoryDataPath, 'utf8'));

// 生成侧边栏配置
const generateSidebar = () => {
  return Object.entries(categoryData).map(([category, posts]) => ({
    text: category,
    children: posts.map(post => post.path)
  }));
};
// 生成导航栏配置
const generateNavbar = () => {
  return [
    { text: '首页', link: '/' },
    { 
      text: '文章分类', 
      children: Object.keys(categoryData).map(category => ({
        text: category,
        link: `/posts/?category=${category}`
      }))
    },
    { text: '关于', link: '/about/' }
  ];
};

export default defineUserConfig({
   title: 'Flr的技术博客',
   theme: defaultTheme({
    // 添加全局作者配置
    author: 'flr',
    contributors: ['flr'],
    // 添加页面元数据配置
    pageMeta: {
      author: true,
      contributors: true
    },
    navbar: generateNavbar(),
    // 使用动态生成的侧边栏
    sidebar: {
      '/posts/': generateSidebar()
    }
  })
})