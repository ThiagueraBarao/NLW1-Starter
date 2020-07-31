// importar a dependencia do sqlite 3
const sqlite3 = require("sqlite3").verbose();

// Criar o objeto que faz as as operações no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
// Utilizar o objeto de banco de dados, para mossas operações
// db.serialize(()=>{
//     // Criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//     // Inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items
//         ) VALUES (?,?,?,?,?,?,?);
//     `
//     // Inserindo valores 
//     const values = [
//         "www.google.com",
//         "Thiaguera",
//         "Campos São João",
//         "575",
//         "Barão de Cocais",
//         "Minas Gerais",
//         "Resíduo Nuclear"
//     ]
//     // Inserindo dados
//     function afterInsertData(err){
//         if (err){
//             return console.log(err)
//         }
//         console.log("Cadastrado com Sucesso")
//         console.log(this)
//     }

//     db.run(query,values,afterInsertData)

//     // Consulta os dados na tabela
//     // db.all(`SELECT * FROM places`,function(err,rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Todos os Valores")
//     //     console.log(rows)
//     // })
//     // Deleta registros da base
//     // db.run(`DELETE FROM places WHERE id = ?`,[1],function(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }
//     //     console.log("Registro Deletado com Sucesso")
//     // })
// })