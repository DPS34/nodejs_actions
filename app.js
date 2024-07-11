const express = require('express');
const app = express();
const port = 3000;

app.get('/index.html', (req, res) => {
    res.send('<html><body><h1>Hello, World!</h1></body></html>');
});

app.get('/health/check', (req, res) => {
    res.json({ status: 'UP' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
