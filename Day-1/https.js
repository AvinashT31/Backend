const http = require("http");
const { json } = require("stream/consumers");

const books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' }
];

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/api/hello") {
        res.writeHead(200, { 'content-type': 'application/json' })
        res.end(JSON.stringify(books));
    }
    else {
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end("endpoint not found")
    }
});

const port = 8000;
server.listen(port, () => {
    console.log(`ser running on port ${port}`);
})



