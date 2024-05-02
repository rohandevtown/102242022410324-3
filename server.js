const http = require("http"); // package import

const port = 8081; // PORT Num

const toDoList = ["rohan", "rohit", "anil", "anup"];

http.createServer((request, response)=>{
    const {method, url} = request;
    // console.log(method, url);

    if(url === "/todos"){
        if(method === "GET"){
            response.writeHead(200);
            response.write(toDoList.toString())
        }else if (method === "POST"){
            let body = "";
            request.on('error',(err)=>{
                console.log(err);
            }).on('data',(chunk)=>{
                body += chunk
                console.log("chunk:", chunk)
            }).on('end',()=>{
                body = JSON.parse(body)
                console.log("body: ", body)
            })
        }
        
        else{
            response.writeHead(501);
        }
    }else if (url === "/"){
        
    }
    // response.writeHead(200, {"Content-Type": "text/html"});
    // response.write("<h1>Hello World! - Rohan Kinnal   </h1>");
    response.end();
})
.listen(port, ()=>{
    console.log(`NodeJs server is up and running succesfully on port ${port}`)
})

// http://localhost:8081

