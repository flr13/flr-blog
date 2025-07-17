# 常见问题与解决方案

## npm常用命令

```sh
npm -v #查看npm安装的版本。
npm init #会引导你建立一个package.json文件，包括名称、版本、作者等信息。
npm list #查看当前目录下已安装的node包。
npm ls #查看当前目录下已安装的node包。
npm install moduleNames #安装Node模块到本地目录node_modules下。
npm install < name > -g #将包安装到全局环境中。
npm install < name > --save #安装的同时，将信息写入package.json中，项目路径中若是有package.json文件时，直接使用npm install方法就能够根据dependencies配置安装全部的依赖包，这样代码提交到git时，就不用提交node_modules这个文件夹了。
npm install < name> --save-dev #安装的同时，将信息写入package.json中项目路径中若是有package.json文件时，直接使用npm install方法就能够根据devDependencies配置安装全部的依赖包，这样代码提交到git时，就不用提交node_modules这个文件夹了。
npm uninstall moudleName：#卸载node模块。
npm i --legacy-peer-deps  #降版本

nvm install 16 #安装需要的node版本
nvm use 16.17.0 #使用该版本号的node
nvm list #查看当前安装的所有node版本
nvm ls #查看当前安装的所有node版本
nvm list available #显示所有可下载的版本
nvm alias [16] [16.17.0] #给不同的版本号添加别名
nvm unalias [16] #删除已定义的别名
nvm alias default [16.17.0] #设置默认版本
nvm current #查看当前 node 版本
npm cache clean --force #强制清缓存

```

##  项目常见报错与解决方案

1. 关于报错：无法加载文件 D:\node\node_global\yarn.ps1，因为在此系统上禁止运行脚本的问题

```sh
get-ExecutionPolicy #看状态  结果为 Restricted
set-ExecutionPolicy RemoteSigned #将其设置为RemoteSigned
get-ExecutionPolicy  #再次看状态 ，结果为 RemoteSigned
```

2. npm install安装报错 gyp info it worked if it ends with ok  使用 cnpm install node-sass -g

```shell
npm uninstall node-sass #卸载当前版本
npm install node-sass@4.14.0  #安装指定版本,若依然报错使用cnpm 安装
npm install -g cnpm --registry=https://registry.npm.taobao.org #cnpm -v看是否安装，若没有，安装cnpm
cnpm install node-sass --save （使用淘宝镜像安装node-sass）
```

3. Integrity check failed for “antd“ (computed integrity doesn‘t match our records 报错

   ```powershell
   1、清理缓存
   yarn cache clean
    
   2、安装依赖
   命令参考 https://classic.yarnpkg.com/en/docs/cli/install/
    
   yarn install --no-lockfile --update-checksums
   ```

   

## 项目常用规范

1. git提交信息规范

   ```sh
   feat: 【ipm2.0】-【故障预处理详情-接口对接 [(xxx) :alien ]  #功能点:feat ；修复bug:fix 
   
   Description: 接口对接
   
   Jira: #IPM-622
   如果接口定义好后，后端说要变动的，改url，改method, 改数据结构的，都在git commit message 第一行加  (人名xxx) :alien ]  
   ```

2. 注释规范

   ```
   /**
   * @description: 附件按钮不可点击
   * @param {object} row当前行数据
   */
   ```

## Git 工作流

1. 创建 ssh

   ```sh
   ssh-keygen -t rsa -C "邮件地址"  #创建SSH Key
   ```

2. 关联远程仓库

   ```sh
   git remote add <仓库名> <远程仓库地址> # 关联远程仓库，仓库名一般使用origin
   ```

3. 推送提交

   ```sh
   git push -u <仓库名> <分支名> # 把文件推送到远程仓库
   ```

4. git常用的命令

   ```sh
   git add.
   git commit --m 'xxx'
   git status
   git remote -v
   git push
   git log --oneline #查看提交历史
   git reflog --oneline # 查看需要回滚的所有ID
   git reset --hard  commitId  #回退到指定版本
   git reset --soft
   git commit --amend #修改最新一次提交的描述信息
   git stash
   git stash pop
   git checkout -b panda
   例如现在有三个分支
   主分支 master
   分支一 develop
   自己的分支 coupon_clj_2020
   
   和并coupon_clj_2020和develop，要把自己分支的代码合并到develop上去。
   
   一：git checkout develop
   二：git pull
   三：git merge --no-edit coupon_clj_2020
   三：git push origin develop
   ```

5. 回退指定的文件

   ```sh
   git reset commit_id fileName #指定文件回到历史状态更新到暂缓区，但工作区的还没变；
   git checkout – fileName #更新到工作区
   git reset HEAD fileName #可以撤销回到当前版本
   git st 显示的不同
   ```

6. 个人分支合并到主分支，远端个人分支消失   ，git pull 提示错误

   ![1651714169877](C:\Users\spurs\AppData\Roaming\Typora\typora-user-images\1651714169877.png)

   ```sh
   git checkout 主分支  #切回主分支
   git pull #拉取最新的代码
   git fetch -p 
   git checkout 个人分支  #切到个人分支 
   git branch --unset-upstream #再次更新远程分支
   git checkout 个人分支 #再切回个人分支
   git branch --set-upstream-to= origin/主分支名 个人分支名 
   ```

7. git如何删除指定提交后的无用历史

   ```sh
   git log --oneline 
   git reset --hard  commitId #将head指向需要删除前的id
   git push origin HEAD -f  #删除该id后的所有提交
   git log --oneline  #此时只有该id之后的提交已删除
   ```

8. git commit 提交的时候报错husky > pre-commit hook failed (add --no-verify to bypass)（解决办法）

   分析：这个问题是因为当你在终端输入git commit -m "XXX",提交代码的时候,pre-commit(客户端)钩子，它会在Git键入提交信息前运行做代码风格检查。如果代码不符合相应规则，则报错，而它的检测规则就是根据.git/hooks/pre-commit文件里面的相关定义。查询了网上的解决办法，总结为以下三种解决方案，个人喜欢第三种：

   （1）**卸载husky**，只要把项目的package.json文件中devDependencies节点下的husky库删掉，然后重新npm i 一次即可。或者直接在项目根目录下执行npm uninstall husky --save也可以，再次提交，自动化测试功能就屏蔽掉
   （2）进入项目的.git文件夹(文件夹默认隐藏,可先设置显示或者命令ls查找),再进入hooks文件夹,**删除pre-commit文件,重新git commit -m 'xxx' git push即可**。
   （3）将git commit -m "XXX" 改为 git commit --no-verify -m "XXX"

   ## 项目常用函数

   1. 判断不为空

   ```js
   if (!_.isEmpty(res.data)) {
             this.systemNameList = res.data
           }
   ```

   2. 深克隆

   ```js
    this.originalData = _.cloneDeep(res.data)
   ```

   3. 数组去重

      形式  [{}]

   ```js
      /**
       * 去重，根据元素的某一个属性来进行去重
       * @param {*} data
       *  使用：this.clearOne([...this.resourceList]
       */
       clearOne(data) {
         const res = new Map()
         return data.filter((a) => !res.has(a.name) && res.set(a.name, 1))
       },
   ```

   4. el-tree使用setCheckedKeys清空树节点

      ```js
      this.$nextTick(() => {
                this.$refs.treeName.setCheckedKeys([])
              })
      ```

   5. resetFields不生效的原因

      >场景:  新增和编辑界面 使用同一个弹窗表单
      >
      >进入列表页面后，先点击编辑按钮，然后点击新增按钮，显示的弹出框显示刚才编辑的内容。弹出框的closeInfo方法是调用了resetFields方法的，但是没有生效。 

   ​     解决方法: 

     >resetFields不生效的原因：
     >此方法是将form表单的数据设置为初始值，而这个初始值是在form mouted生命周期被赋值上去的。所以，在form mounted之前，如果form表单赋值了，那么后面调用resetFields都是无效的，因为form表单的初始值已经在mounted之前就被赋值了。
     >解决办法：
     >只要在form表单mounted之后再进行赋值操作这样就可以完美解决问题了，也就是说在点击编辑赋值的时候使用this.$nextTick方法

   6.  scheme?.code ?? this.formInline.scheme 

   这段代码是使用了 JavaScript 中的 nullish coalescing 运算符 `??`，它的作用是在左侧操作数（`scheme?.code`）的值为 `null` 或 `undefined` 时，返回右侧操作数（`this.formInline.scheme`）的值。

   其中，`.` 表示对象属性的访问操作符。`?` 是可选链操作符，表示如果左侧的操作数存在，则继续访问右侧的属性或方法；否则返回 `undefined`。

   因此，`scheme?.code` 的意思是：如果 `scheme` 存在且具有 `code` 属性，则返回 `scheme.code` 的值；否则返回 `undefined`。

   而整个表达式的含义是：如果 `scheme?.code` 的值为 `null` 或 `undefined`，则返回 `this.formInline.scheme` 的值。这里的 `this` 表示当前对象，即执行该代码的对象。

   7. 对object 重新处理，保存值不变，返回新的不同属性的object

      ```js
       // 获取资源方案的选项
          getSchemeOptions() {
            schemeList().then(res => {
              this.formInline.schemeOptions = res.data.map(item => {
                return {
                  label: item.name,
                  value: item.id,
                  code: item.code
                }
              })
            }).finally(() => {
              this.setDetailData()
            })
          },
      ```

      

   8. 发布包

      ```shell
      employee / East@132!@#这是公用的账蜜。。。。使用nexus，，目前下载与发布是分开不同url的。
      
      npm install  时用这个 http://nexus.eastcom-sw.com/repository/npm-public/
      npm install --registry http://nexus.eastcom-sw.com/repository/npm-public/
      yarn install --registry=http://nexus.eastcom-sw.com/repository/npm-public/
      publish时用这个  
      http://nexus.eastcom-sw.com/repository/npm-releases/
      
      npm login -registry http://nexus.eastcom-sw.com/repository/npm-releases/
      
      employee/East@123!@#
      wangping@eastcom-sw.com
      gitHub@flr13
      ```

      

   9. 选择合并指定的commit

      ```shell
      git log  //查看提交的日志，复制要合并的那个分支的commit id(简略ID-前8位数)
      
      git checkout 要合并的分支  // 切换到要合并的分支上
      
      git cherry-pick 上面复制的那个要合并的commit id  // 提交该commit到当前分支
      
      git push // 推送到B分支远程仓库
      ```

      

   10. 安装lodash 并使用

      ```shell
    $ npm i -g npm
    $ npm i --save lodash
    全局使用 main.js
   import _ from 'lodash'
   Vue.prototype._ =_
   
      ```

9. json 字符串转换

   ```sh
   JSON.parse(string) ：接受一个 JSON 字符串并将其转换成一个 JavaScript 对象
   JSON.stringify(obj) ：接受一个 JavaScript 对象并将其转换为一个 JSON 字符串
   ```

10. 