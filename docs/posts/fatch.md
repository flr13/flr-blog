### fatch

fetch API 是用于在网络上获取资源的现代 Web API。以下是 fetch 的基本语法和用法：

1. 发起 GET 请求：

  ```js
  fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```
  
  
  
2. 发起 POST 请求：

  ```js
  fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
   'Content-Type': 'application/json'
    },
    body: JSON.stringify({ key: 'value' })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  ```

  

3. 处理响应数据：

  ```js
   fetch('https://api.example.com/data')
     .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
   }
   return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
  ```
  
  
  
4. 处理错误：

  ```js
  fetch('https://api.example.com/data')
    .then(response => {
   if (!response.ok) {
     throw new Error('Network response was not ok');
   }
   return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error))
  ```

  请注意，fetch 返回的是一个 Promise 对象，因此您可以使用 then() 和 catch() 方法来处理异步请求和错误
