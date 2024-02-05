import http from "http";

const server = http.createServer((request, response) => {
console.info(request.url);
console.info(request.method);

if (request.method === "POST") {
    request.addListener('data', (data) => {
        response.setHeader('Content-Type', 'application/json');
        response.write(data);
        response.end();
    });

} else {
    if(request.url === '/hello') {
        response.write(`hello Again World`);
    } else{
        response.write(`dadah world`);
    }
    response.end();
}
});

server.listen(8000);