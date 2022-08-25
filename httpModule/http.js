const http = require("http");

const student = {
    std1: {
        id: 1,
        name: "abc",
        email: "abc@gmail.com",
      
    },
    std2: {
        id: 2,
        name: "abc2",
        email: "abc2@gmail.com"
    },
}

const server = http.createServer((req, res) => {
    if(req.url==="/"){
        res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(student))
    res.end()
}
else if(req.url==="/about"){
    res.writeHead(200);
    res.write("about")
    res.end()
}
else{
    res.writeHead(404);
    res.end("404 error")
}
})

server.listen((8000), () => {
    console.log("server listen on port number 8000")
})