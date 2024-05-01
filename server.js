const http = require("http"); // package import

const port = 8081; // PORT Num

http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello World! - Rohan Kinnal   </h1>");
    response.end();
})
.listen(port, ()=>{
    console.log(`NodeJs server is up and running succesfully on port ${port}`)
})

// http://localhost:8081