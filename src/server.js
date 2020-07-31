const express = require("express");
const server = express();

// Pegar o banco de dados
const db = require("./database/db.js")

// Altera o caminho da parte de assets para publica
server.use(express.static("public"));

// Habilitar o uso do req.body na aplicação
server.use(express.urlencoded({extended:true}))

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
    console.log(req.query)
    return res.render("create-point.html", {saved:true})
})
server.post("/create-point",(req,res)=>{
    console.log(req.body)

    // Inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    // Inserindo valores 
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]
    // Inserindo dados
    function afterInsertData(err){
        if (err){
            return console.log(err)
        }
        console.log("Cadastrado com Sucesso")
        console.log(this)

        return res.render("create-point.html",{saved: true})
    }

    db.run(query,values,afterInsertData)

})
server.get("/search-results",(req,res)=>{

        const search = req.query.search

        if(search == ""){
            return res.render("search-results.html", {total:0})
        }

        db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`,function(err,rows){
        if(err){
            return console.log(err)
        }
            console.log("Todos os Valores")
            console.log(rows)
            const total = rows.length
            return res.render("search-results.html", {places:rows, total:total})

        })
})


// Ligar o Servidor
server.listen(3000)

