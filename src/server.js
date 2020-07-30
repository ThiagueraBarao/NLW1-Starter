const express = require("express");
const server = express();

// Altera o caminho da parte de assets para publica
server.use(express.static("public"));

// Utilizando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})


// Configurar os Paths
server.get("/",(req,res)=>{
    return res.render("index.html",{title: "Seu marketplace de coleta de resíduos"})
})
server.get("/create-point",(req,res)=>{
    return res.render("create-point.html")
})
server.get("/search-results",(req,res)=>{
    return res.render("search-results.html")
})


// Ligar o Servidor
server.listen(3000)

