const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { encrypt, decrypt } = require("./crypto");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "vacinaeu",
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  db.query("select * from empresas", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post("/register", (req, res) => {
  const name = req.body.name;
  const cnpj = req.body.cnpj;
  const email = req.body.email;
  const password = encrypt(req.body.password).content;

  db.query(
    "insert into empresas (emp_nome, emp_cnpj, emp_email, emp_senha) values (?,?,?,?)",
    [name, cnpj, email, password],
    (err, result) => {
      if (err) console.log(err);
      else console.log("Values inserted successfully");
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
