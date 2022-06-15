const sqlite = require("sqlite3")
const db     = new sqlite.Database("C:\\Users\\Usuario\\OneDrive\\Documentos\\GitHub\\Nova pasta\\Alberto-Rocha-Miranda\\03_AUT_EST_ENTREGA\\semana 8\\backend\\db.db")
const express = require('express'); 
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
const cors = require("cors")

app.use(cors({origin:"*"}))

const hostname = '127.0.0.1';
const port = 3022;
app.use(express.static("../frontend/"));

app.get("/jogos", (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  let command = " SELECT nome FROM jogos_preferidos";

  db.all(command, async (err,rows) => {
     res.json(rows)
       
});
});

app.delete("/jogo", (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let command = "DELETE FROM jogos_preferidos WHERE nome ='" +req.body.nome +"'"
  db.run(command,[], err=>{
    if (err) throw err;
  })
  res.end()
}) 

app.post("/jogo", (req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let command = `INSERT INTO jogos_preferidos (nome) VALUES ('${req.body.nome}');`
  console.log(req.body.nome)
  db.run(command,[], err => {
    if (err) throw err;
  })
  res.end()
})

app.put("/jogo",(req,res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  let command = "UPDATE jogos_preferidos SET nome ='" + req.body.nome_new + "' WHERE nome = '"  + req.body.nome + "'"
  db.run(command,[],err => {
    if (err) throw err;
  })
  res.end()
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/index.html`);
});


