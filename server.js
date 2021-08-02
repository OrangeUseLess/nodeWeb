const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.get('/', (req,res) => {
    res.redirect(`http://localhost:${port}/views/index/index.html`);
})

// 提供静态文件, /static 是一个虚拟文件路径
// 一下代码在访问静态文件时，使用的是绝对路径。
app.use('/static', express.static(path.join(__dirname, 'public')));

// 页面
app.use('/views',express.static('views'));

app.listen(port, () => {
    console.log(`已连接到 http://localhost:${port}`);
})

