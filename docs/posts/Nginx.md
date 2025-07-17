# Nginx

参考文章  https://www.jb51.net/article/148809.htm

## Nginx Location 路径匹配规则

| 没有前缀 | 匹配以指定模式开头的location                  |
| -------- | --------------------------------------------- |
| =        | 精准匹配，不是以指定模式开头                  |
| ~        | 正则匹配，区分大小写                          |
| ~*       | 正则匹配，不区分大小写                        |
| ^~       | 非正则匹配，匹配以指定模式开头的location      |
| /        | 通用匹配, 如果没有其它匹配,任何请求都会匹配到 |

## **location匹配顺序**

多个正则location直接按书写顺序匹配，成功后就不会继续往后面匹配

普通（非正则）location会一直往下，直到找到匹配度最高的（最大前缀匹配）

当普通location与正则location同时存在，如果正则匹配成功,则不会再执行普通匹配

所有类型location存在时，“=”匹配 > “^~”匹配 > 正则匹配 > 普通（最大前缀匹配）

示例

```sh
location = / {
 # 精确匹配 / ，主机名后面不能带任何字符串
 [ configuration A ]
}
 
location / {
 # 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求
 # 但是正则和最长字符串会优先匹配
 [ configuration B ]
}
 
location /documents/ {
 # 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索
 # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
 [ configuration C ]
}
 
location ~ /documents/Abc {
 # 匹配任何以 /documents/Abc 开头的地址，匹配符合以后，还要继续往下搜索
 # 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
 [ configuration CC ]
}
 
location ^~ /images/ {
 # 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。
 [ configuration D ]
}
 
location ~* \.(gif|jpg|jpeg)$ {
 # 匹配所有以 gif,jpg或jpeg 结尾的请求
 # 然而，所有请求 /images/ 下的图片会被 config D 处理，因为 ^~ 到达不了这一条正则
 [ configuration E ]
}
 
location /images/ {
 # 字符匹配到 /images/，继续往下，会发现 ^~ 存在
 [ configuration F ]
}
 
location /images/abc {
 # 最长字符匹配到 /images/abc，继续往下，会发现 ^~ 存在
 # F与G的放置顺序是没有关系的
 [ configuration G ]
}
 
location ~ /images/abc/ {
 # 只有去掉 config D 才有效：先最长匹配 config G 开头的地址，继续往下搜索，匹配到这一条正则，采用
  [ configuration H ]
}
 
location ~* /js/.*/\.js
```

## 常用正则

| 符号  |            描述            |
| :---: | :------------------------: |
|   h   | 匹配除换行符以外的任意字符 |
|   ?   |        重复0次或1次        |
|  \+   |      重复1次或更多次       |
|  \*   |      重复0次或更多次       |
|  \d   |          匹配数字          |
|   ^   |      匹配字符串的开始      |
|   $   |      匹配字符串的介绍      |
|  {n}  |          重复n次           |
| {n,}  |      重复n次或更多次       |
|  [c]  |       匹配单个字符c        |
| [a-z] | 匹配a-z小写字母的任意一个  |

小括号()之间匹配的内容，可以在后面通过$1来引用，$2表示的是前面第二个()里的内容。

**正则里面容易让人困惑的是\转义特殊字符。**

1. 无斜杠

   > proxy_pass：http://localhost:3000。
   >
   > **无斜杆location匹配到的部分也属于请求的部分**。
   >
   > location无论用/get还是用/get/只要匹配上之后都会将整个请求部分/get/test加到proxy_pass上
   >
   >  http://localhost:3000+/get/test等于请求http://localhost:3000/get/test 



2.  有斜杠

   > proxy_pass：http://localhost:3000/。
   >
   > 有斜杆location匹配到的部分只用于匹配，不属于请求部分，需要在请求部分将location匹配到的部分剔除。
   >
   > location用/get则是http://localhost:3000/+(/get/test -/get)等于请求http://localhost:3000//test
   >
   > location用/get/则是http://localhost:3000/+(/get/test -/get/)等于请求http://localhost:3000/test



3. 有斜杠也有字符串  

   > proxy_pass：http://localhost:3000/abc。
   >
   > 同有斜杆的规则，在请求部分剔除location后加在上面即可。
   >
   > location用/get则是http://localhost:3000/abc+(/get/test -/get)等于请求http://localhost:3000/abc/test
   >
   > location用/get/则是http://localhost:3000/abc+(/get/test -/get/)等于请求http://localhost:3000/abctest

    location /resources {
        proxy_set_header Host $http_host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header REMOTE-HOST $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass    http://10.20.1.60:18896  ;
    }
    
    http://10.20.1.60:18890/galaxy/resources/
    