const http = require('http');
let port = 3000;
let host = '127.0.0.1';
let myName = "백준철";
let tmp = String.raw`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>메인</title>
</head>
<body>
    <div class="container">
        <h2>${myName} 메인페이지</h2>

    </div>

</body>
</html>`;
const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
    res.end(tmp);
});
server.listen(port,host,() => {
    console.log(`Server running at http://${host}:${port}`);
})
