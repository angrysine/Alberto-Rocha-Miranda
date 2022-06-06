const sqlite = require("sqlite3")
const db     = new sqlite.Database("C:\\Users\\Usuario\\OneDrive\\Documentos\\GitHub\\Nova pasta\\Alberto-Rocha-Miranda\\03_AUT_EST_ENTREGA\\semana 6\\backend\\db.db")
const express = require('express'); 
const app = express();

const hostname = '127.0.0.1';
const port = 3022;
app.use(express.static("../frontend/"));

app.get("/jogos", (req,res) => {
  var command = " SELECT nome FROM jogos_preferidos";

  db.all(command, async (err,rows) => {
    console.log("teste");
     res.json(rows)
       
});
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});