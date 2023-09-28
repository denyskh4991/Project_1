const { createServer } = require('node:http');
const { readFile } = require('node:fs');
const { extname } = require('node:path');

const server = createServer((req, res) => {
    let filePath = req.url === '/' ? './index.html' : `.${req.url}`;
    const ext = extname(filePath);
    let contentType = 'text/html';

    if (req.url === '/about') {
        filePath = './about.html';
    } else if (req.url === '/contact') {
        filePath = './contact.html';
    }

    switch (ext) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.jpg':
            contentType = 'image/jpeg';
            break;
        case '.png':
            contentType = 'image/png';
            break;
    }

    readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                readFile('./404.html', (err, notFoundPage) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(notFoundPage, 'utf8');
                });
            } else {
                res.writeHead(500);
                res.end(`Помилка сервера: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущено на порту ${PORT}`);
});