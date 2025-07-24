const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// 博客文章目录
const postsDir = path.resolve(__dirname, '../../posts');
// 分类数据存储路径
const categoryDataPath = path.resolve(__dirname, '../category-data.json');

// 读取所有文章并按分类整理
function generateCategoryData() {
  const categories = { '未分类': [] };
  
  // 读取posts目录下的所有文件
  fs.readdirSync(postsDir).forEach(file => {
    if (path.extname(file) === '.md') {
      const filePath = path.join(postsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);
      
      // 获取分类信息
      const category = data.category || '未分类';
      
      // 按分类存储文章路径
      if (!categories[category]) {
        categories[category] = [];
      }
      
      categories[category].push({
        title: data.title || path.basename(file, '.md'),
        path: `/posts/${file}`
      });
    }
  });
  
  // 将分类数据写入JSON文件
  fs.writeFileSync(categoryDataPath, JSON.stringify(categories, null, 2), 'utf8');
  console.log('侧边栏分类数据已生成');
}

generateCategoryData();