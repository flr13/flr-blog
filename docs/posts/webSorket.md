## webSocket

WebSocket是HTML5开始提供的一种网络通信协议，使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在WebSocket API中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

### 2、WebSocket 的方法

ws.send() -- 向服务器发送数据
ws.close() -- 关闭连接

#### 3、 WebSocket 的事件

ws.onopen - 建立连接时触发
ws.onmessage - 客户端接收服务端数据时触发
ws.onerro -通信错误时触发
ws.onclose - 连接错误时触发

### 4、Websoket.readyState

 readyState属性返回实例对象的当前状态，有四种状态
0 - 表示正在连接
1 - 表示连接成功可以通信
2 - 表示连接正在关闭
3 - 表示连接已经关闭，或者打开链接失败

###  **5、Websoket使用** 

```js

//创建一个webSoket对象
let ws = new WebSocket('接口地址')
 
//连接成功时触发
ws.onopen(){
   conson.log（'连接成功'）
}
 
//连接失败时触发
ws.onerror(){
   conson.log（'连接失败'）
}
 
//向服务端发送请求
ws.send()
 
//接收消息时触发
ws.onmessage(MessageEvent){
    conson.log（MessageEvent.data）
}
 
//连接关闭
ws.onclose(){
    conson.log（'连接关闭'）
}
```

