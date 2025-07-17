好的，以下是一个关于上述两种方案的Markdown文档，你可以根据需要进行调整和补充。

---

# 文件上传与JSON数据传输方案

## 方案一：使用`multipart/form-data`将文件和JSON数据一起发送

### 前端实现

```javascript
// 创建FormData对象
const formData = new FormData();

// 添加JSON数据
const jsonData = JSON.stringify({ key: 'value' }); // 替换为你的JSON数据
formData.append('json', jsonData);

// 添加文件
const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];
formData.append('file', file);

// 发送请求
fetch('/upload', {
  method: 'POST',
  body: formData,
}).then(response => {
  return response.json();
}).then(data => {
  console.log('上传成功:', data);
}).catch(error => {
  console.error('上传失败:', error);
});
```

### 后端实现（Node.js + Express + Multer）

```javascript
const express = require('express');
const multer = require('multer');
const app = express();

// 配置multer存储
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('file'), (req, res) => {
  const jsonData = JSON.parse(req.body.json); // 获取JSON数据
  const file = req.file; // 获取文件
  console.log('JSON数据:', jsonData);
  console.log('文件:', file);
  res.json({ message: '上传成功' });
});

app.listen(3000, () => {
  console.log('服务器运行在3000端口');
});
```

## 方案二：分两步实现：先创建草稿，再上传文件

### 前端实现

```javascript
// 第一步：创建草稿并获取ID
fetch('/createDraft', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' }) // 替换为你的JSON数据
}).then(response => {
  return response.json();
}).then(data => {
  const id = data.id; // 获取后端返回的ID
  const fileInput = document.querySelector('input[type="file"]');
  const file = fileInput.files[0];

  // 修改文件名
  const newFileName = `${id}${file.name.substring(file.name.lastIndexOf('.'))}`;
  const newFile = new File([file], newFileName, { type: file.type });

  // 第二步：上传文件
  const formData = new FormData();
  formData.append('file', newFile);

  fetch('/upload', {
    method: 'POST',
    body: formData
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log('文件上传成功:', data);
  }).catch(error => {
    console.error('文件上传失败:', error);
  });
}).catch(error => {
  console.error('创建草稿失败:', error);
});
```

### 后端实现

#### 创建草稿接口

```javascript
app.post('/createDraft', (req, res) => {
  const jsonData = req.body; // 获取JSON数据
  console.log('JSON数据:', jsonData);
  const id = generateId(); // 生成ID的逻辑
  res.json({ id: id });
});
```

#### 文件上传接口

```javascript
app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file; // 获取文件
  console.log('文件:', file);
  res.json({ message: '文件上传成功' });
});
```

## 总结

- 如果需要在一个请求中同时发送文件和JSON数据，可以使用`multipart/form-data`。
- 如果需要先获取后端返回的ID，再上传文件，可以分两步实现：先调用创建草稿接口获取ID，再将文件名改为ID后上传文件。

你可以根据具体需求选择适合的方式。

---

希望这份Markdown文档对你有帮助！