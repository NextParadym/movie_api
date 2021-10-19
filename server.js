
const http = require('http'),
fs = require('fs'),
// import url
url = require('url');

let addr = 'http://localhost:5500/default.html?year=2017&month=february';
let q = url.parse(addr, true);

console.log(q.host); // returns 'localhost:8080'
console.log(q.pathname); // returns '/default.html'
console.log(q.search); // returns '?year=2017&month=february'

let qdata = q.query; // returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); // returns 'february'


// http module that listens for requests on port 8080.
http.createServer((request, response) => {
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('Hello Node!\n');
}).listen(5500);

console.log('My first Node test server is running on Port 5500.');


http.createServer((request, response) => {
    let addr = request.url,
    q = url.parse(addr, true),
    filePath = '';

    fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Added to log.');
    }
    });

    if (q.pathname.includes('documentation')) {
        filePath = (__dirname + '/documentation.html');
    } else {
        filePath = 'index.html';
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
        throw err;
    }
    
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();

    });

}).listen(5500);
console.log('My test server is running on Port 5500.');

