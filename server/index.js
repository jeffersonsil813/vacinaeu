const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { encrypt } = require("./crypto");
const jwt = require("jsonwebtoken");
const authConfig = require("./config/auth");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "vacinaeu",
});

app.use(cors());
app.use(express.json());

function generateToken(params = {}) {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400,
  });
}

app.get("/", (req, res) => {
  db.query("select * from empresas", (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.post("/register", (req, res) => {
  let name = req.body.name;
  let cnpj = req.body.cnpj;
  let email = req.body.email;
  let password = encrypt(req.body.password);

  db.query(
    "insert into empresas (emp_nome, emp_cnpj, emp_email, emp_senha) values (?,?,?,?)",
    [name, cnpj, email, password],
    (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    }
  );
});

app.post("/login", (req, res) => {
  let email = JSON.stringify(req.body.email);
  let password = JSON.stringify(encrypt(req.body.password));

  let sql =
    "select * from empresas where emp_email = " +
    email +
    " and emp_senha = " +
    password +
    "";

  db.query(sql, (err, result) => {
    if (err) console.log(err);
    else {
      if (result.length !== 0) {
        let user = {};
        user.emp_id = result[0].emp_id;
        user.emp_nome = result[0].emp_nome;
        user.emp_cnpj = result[0].emp_cnpj;
        user.emp_email = result[0].emp_email;

        res.send({ user, token: generateToken({ id: user.emp_id }) });
      } else {
        // User not found
        res.status(400).send({ error: "User not found" });
        console.log("User not found!");
      }
    }
  });
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
