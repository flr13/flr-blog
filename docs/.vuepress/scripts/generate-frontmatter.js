/*
 * @Author: flr 
 * @Date: 2025-07-18 09:51:54
 * @LastEditors: flr 
 * @LastEditTime: 2025-07-18 10:07:55
 * @FilePath: \flr-blog\docs\.vuepress\scripts\generate-frontmatter.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 安装依赖: npm install gray-matter --save-dev

const postsDir = path.resolve(__dirname, '../../posts');
const categories = {
  'CSS': ['CSS Grid 网格布局', 'CSS常见布局和样式', 'Flex布局'],
  'JavaScript': ['事件循环（Event LOOP)', 'asyn  await', 'js运算符及其优先级', 'map - set的Deep-sum'],
  '框架': ['Vue3', 'react', 'qiankun', 'vuex 状态管理', 'vue父子组件通信'],
  '工具': ['Nginx', 'JSDoc', 'babel配置', 'yarn link', 'nvm-use'],
  '其他': ['终端常用命令', 'web-Http', 'webSorket', '文件上传与JSON数据传输方案']
};

function getCategory(filename) {
  for (const [category, files] of Object.entries(categories)) {
    if (files.some(file => filename.includes(file))) {
      return category;
    }
  }
  return '未分类';
}

fs.readdirSync(postsDir).forEach(file => {
  if (path.extname(file) === '.md') {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    // 如果没有Frontmatter或缺少必要字段，则添加
    if (!data.title || !data.date || !data.category) {
      const title = path.basename(file, '.md');
      const category = getCategory(title);
      const date = data.date || new Date().toISOString().split('T')[0];
      const newData = matter.stringify(fileContent, {
        title,
        date,
        category,
        author: 'flr', // 添加作者信息
        tags: data.tags || []
      });

      fs.writeFileSync(filePath, newData, 'utf8');
      console.log(`已处理: ${file}`);
    }
  }
});