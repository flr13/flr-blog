<!--
 * @Author: 吴莉蓉 wulr@eastcom-sw.com
 * @Date: 2025-07-18 10:50:54
 * @LastEditors: 吴莉蓉 wulr@eastcom-sw.com
 * @LastEditTime: 2025-07-18 10:51:07
 * @FilePath: \flr-blog\docs\.vuepress\components\CategoryPage.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="category-page">
    <h1>{{ category || 'All Articles' }}</h1>
    <div v-if="posts.length > 0">
      <ul class="post-list">
        <li v-for="post in posts" :key="post.path">
          <a :href="post.path">{{ post.title }}</a>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No articles found in this category.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import categoryData from '../category-data.json'

const route = useRoute()
const category = route.query.category

const posts = category
  ? categoryData[category] || []
  : Object.values(categoryData).flat()
</script>

<style scoped>
.category-page { padding: 2rem; }
.post-list { list-style: none; padding: 0; }
.post-list li { margin: 0.5rem 0; }
.post-list a { text-decoration: none; color: #333; }
.post-list a:hover { text-decoration: underline; }
</style>