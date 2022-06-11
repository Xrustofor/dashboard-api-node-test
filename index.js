import http, { request } from 'http';

const host = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
})

server.listen(port, host, () => {
    console.log(`Server start on ${host}: ${port}`);
});