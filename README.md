
# 我的技术博客 (flr-blog)

一个基于VuePress构建的个人技术博客，记录前端开发相关的知识、经验和实践。

## 项目介绍
- 包含前端技术文章、教程和开发笔记
- 使用VuePress构建静态网站
- 支持分类浏览、标签检索和全文搜索

## 主要内容
- Vue系列技术实践
- TypeScript学习笔记
- CSS布局与样式技巧
- 前端工程化方案
- 常见问题解决方案

## 本地运行
```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建静态文件
npm run docs:build
```

## 生成侧边栏分类数据
```bash
npm run generate:sidebar
```
**功能**：自动扫描`/posts`目录下的Markdown文件，根据文件Frontmatter中的`category`字段生成侧边栏分类数据

**工作原理**：
1. 读取所有文章的分类信息
2. 生成`docs/.vuepress/category-data.json`文件
3. 支持自动归类未指定分类的文章到「未分类」目录

**注意事项**：
- 新增或修改文章分类后需要重新执行此命令
- 分类数据会被自动应用到侧边栏导航

## 项目结构
- `/docs`: 文档源文件
- `/docs/.vuepress`: VuePress配置
- `/docs/posts`: 博客文章
- `/docs/images`: 图片资源

## 版权信息
&copy; 2025 我的技术博客 版权所有 | 联系邮箱：flr13@qq.com