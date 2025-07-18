---
title: nvm-use
date: '2025-07-18'
category: NPM
tags: []
---
 # nvm 安装、配置与使用指南

## 1. nvm 简介
nvm（Node.js Version Management）是一个用于管理多个 Node.js 版本的工具，可以轻松安装和切换不同版本的 Node.js。

## 2. 安装 nvm

### 2.1 安装前准备
- **卸载已安装的 Node.js**：在安装 nvm 之前，请确保已卸载系统中已安装的 Node.js。

### 2.2 安装步骤
1. 下载 nvm 安装程序（`nvm-setup.exe`）。
2. 运行安装程序，按照提示进行操作。在安装过程中，可以选择自定义安装目录。
3. 安装完成后，打开命令提示符，输入以下命令验证 nvm 是否安装成功：
   ```bash
   nvm -v

  如果显示版本号，则表示安装成功。

## 3. 配置 nvm

### 3.1 配置环境变量
1. 右键点击“此电脑”，选择“属性”。
2. 点击“高级系统设置”，在弹出的窗口中点击“环境变量”。
3. 在“系统变量”中，查看并添加以下两个变量：
   - **变量名**：`NVM_HOME`，**变量值**：nvm 的安装路径（例如 `C:\Users\你的用户名\.nvm`）。
   - **变量名**：`NVM_SYMLINK`，**变量值**：Node.js 的安装路径（例如 `C:\Program Files\nodejs`）。
4. 编辑用户变量中的 `Path`，添加以下路径：
   - nvm 的安装路径（例如 `C:\Users\你的用户名\.nvm`）。
   - Node.js 的安装路径（例如 `C:\Program Files\nodejs`）。

### 3.2 配置镜像源
1. 打开 nvm 的配置文件 `settings.txt`，通常位于 nvm 的安装目录下。
2. 修改以下内容，添加 Node.js 和 npm 的镜像源：
   ```plaintext
   node_mirror:https://npmmirror.com/mirrors/node/
   npm_mirror:https://npmmirror.com/mirrors/npm/
   ```

### 3.3 创建必要的文件夹
1. 在 Node.js 的安装路径下（例如 `C:\Program Files\nodejs`），新建以下两个文件夹：
   - `node_cache`
   - `node_global`
2. 配置 npm 的 `prefix` 和 `cache` 路径：
   ```bash
   npm config set prefix "C:\Program Files\nodejs\node_global"
   npm config set cache "C:\Program Files\nodejs\node_cache"
   ```

## 4. 使用 nvm

### 4.1 查看可安装的 Node.js 版本
```bash
nvm list available
```

### 4.2 安装指定版本的 Node.js
```bash
nvm install "版本号"
```

### 4.3 切换 Node.js 版本
```bash
nvm use "版本号"
```

### 4.4 验证当前使用的 Node.js 版本
```bash
node -v
```

## 5. nvm 常用命令
- **查看可安装的 Node.js 版本**：
  ```bash
  nvm list available
  ```
- **查看 nvm 版本**：
  ```bash
  nvm version
  ```
- **安装指定版本的 Node.js**：
  ```bash
  nvm install <version>
  ```
- **切换到指定版本的 Node.js**：
  ```bash
  nvm use <version>
  ```
- **列出已安装的所有 Node.js 版本**：
  ```bash
  nvm list
  ```
- **为指定版本创建别名**：
  ```bash
  nvm alias <name> <version>
  ```
- **卸载指定版本的 Node.js**：
  ```bash
  nvm uninstall <version>
  ```
- **显示当前使用的 Node.js 版本**：
  ```bash
  nvm current
  ```
- **切换到默认的 Node.js 版本**：
  ```bash
  nvm use default
  ```
- **在指定版本的 Node.js 环境中执行命令**：
  ```bash
  nvm exec <version> <command>
  ```

希望这份指南能帮助你更好地使用 nvm 来管理 Node.js 版本！

文章来自：https://blog.csdn.net/weixin_42065687/article/details/141320242?fromshare=blogdetail&sharetype=blogdetail&sharerId=141320242&sharerefer=PC&sharesource=qq_45081624&sharefrom=from_link
