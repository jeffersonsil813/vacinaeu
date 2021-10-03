import Axios from "axios";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import "./style.scss";

export function Register() {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (
      name.trim() !== "" &&
      cnpj.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      Axios.post("http://localhost:3001/register", {
        name: name,
        cnpj: cnpj,
        email: email,
        password: password,
      }).then(() => {
        console.log("Success");
      });
    }
  };

  return (
    <>
      <div className="background">
        <div className="main">
          <img src={Logo} alt="VacinaEu" />
          <form onClick={handleSignUp}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nome da empresa"
            />
            <input
              type="text"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              placeholder="CNPJ. Só números"
              maxLength={14}
              // onKeyPress="return event.charCode >= 48 && event.charCode <= 57"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entre com o e-mail da empresa"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entre com uma senha"
            />

            <button type="submit" className="signInButton">
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
