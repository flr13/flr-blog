export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"文章\",\"children\":[{\"text\":\"前端react技术\",\"link\":\"/posts/react/\"},{\"text\":\"单点登陆\",\"link\":\"/posts/SSO/\"}]},{\"text\":\"关于\",\"link\":\"/about/\"}],\"sidebar\":{\"/posts/tech/\":[{\"text\":\"前端技术\",\"children\":[\"/posts/tech/frontend/vue.md\",\"/posts/tech/frontend/react.md\"]},{\"text\":\"后端技术\",\"children\":[\"/posts/tech/backend/nodejs.md\",\"/posts/tech/backend/python.md\"]}],\"/posts/life/\":[{\"text\":\"日常记录\",\"children\":[\"/posts/life/daily/20250710.md\",\"/posts/life/daily/20250715.md\"]}],\"/about/\":[{\"text\":\"关于我们\",\"children\":[\"/about/team.md\",\"/about/contact.md\"]}]},\"footer\":{\"message\":\"Released under the MIT License.\",\"copyright\":\"Copyright © 2025-present FLR Team\"},\"editLink\":{\"pattern\":\"https://github.com/your-repo/edit/main/docs/:path\",\"text\":\"在 GitHub 上编辑此页\"},\"lastUpdated\":{\"text\":\"最后更新时间\"},\"contributors\":{\"text\":\"贡献者\"},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLinkText\":\"Edit this page\",\"lastUpdatedText\":\"Last Updated\",\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
