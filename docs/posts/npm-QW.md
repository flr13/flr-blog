---
title: npm-QW
date: '2025-07-18'
category: NPM
tags: []
---
# 解决 npm ERR! code CERT_HAS_EXPIRED 错误

在使用 npm 安装 Vue 项目依赖时，可能会遇到 `npm ERR! code CERT_HAS_EXPIRED` 错误。该错误是由于请求淘宝 npm 镜像时，证书已过期导致的。以下是几种解决方法：

## 1. 问题描述

在运行 `npm install` 命令时，可能会出现以下错误信息：
```
npm ERR! code CERT_HAS_EXPIRED
npm ERR! errno CERT_HAS_EXPIRED
npm ERR! request to https://registry.npm.taobao.org/vue-loader failed, reason: certificate has expired
```
这表明请求淘宝 npm 镜像时，证书已过期，导致请求失败。

## 2. 解决方案

### 2.1 切换镜像源

#### 2.1.1 切回官方 npm 源
运行以下命令切换到官方 npm 源：
```bash
npm config set registry https://registry.npmjs.org/
```
验证是否切换成功：
```bash
npm config get registry
```
如果输出 `https://registry.npmjs.org/`，则表示设置成功。

#### 2.1.2 换其他稳定镜像
如果想继续使用国内镜像，可以尝试阿里云的 npm 镜像：
```bash
npm config set registry https://registry.npmmirror.com/
```
验证是否切换成功：
```bash
npm config get registry
```
如果输出 `https://registry.npmmirror.com/`，则表示设置成功。

### 2.2 更新 npm
旧版本的 npm 可能存在 SSL 证书兼容问题，建议更新 npm 到最新版本：
```bash
npm install -g npm
```

### 2.3 临时绕过 SSL 验证
如果问题仍未解决，可以临时关闭严格 SSL 检查：
```bash
npm config set strict-ssl false
```
但请注意，这会降低安全性。问题解决后，建议恢复安全验证：
```bash
npm config set strict-ssl true
```

### 2.4 清理缓存
清理 npm 缓存，可能会解决因缓存导致的问题：
```bash
npm cache clean --force
```

### 2.5 检查系统时间
系统时间不准确可能导致证书校验失败。请确保系统时间与网络时间一致：
1. 进入系统设置。
2. 确保“自动同步时间”已开启。

## 3. 总结
优先推荐切换镜像源，因为这是最直接且安全的解决方案。如果问题仍未解决，可以尝试其他方法，但请注意安全性和兼容性。

希望以上方法能帮助您解决问题！
