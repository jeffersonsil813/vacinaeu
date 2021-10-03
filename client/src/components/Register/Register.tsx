import Axios from "axios";
import { useState } from "react";
import Logo from "../../assets/images/logo.png";
import "./register.scss";

import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export function Register() {
  const [name, setName] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleSignUp() {
    if (
      name.trim() !== "" &&
      cnpj.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== ""
    ) {
      await Axios.post("http://localhost:3001/register", {
        name: name,
        cnpj: cnpj,
        email: email,
        password: password,
      }).then((response) => {
        if (response.data !== null && response.data !== undefined) {
          toast.success("Cadastro realizado com sucesso!", {
            duration: 3000,
          });
          setName("");
          setCnpj("");
          setEmail("");
          setPassword("");
          history.push("/");
        }
      });
    } else {
      toast.error("Por favor, preencha todos os campos!", {
        duration: 3000,
      });
    }
  }

  return (
    <>
      <div className="register-container">
        <div className="main">
          <Link className="logo-link" to="/">
            <img src={Logo} alt="VacinaEu" />
          </Link>
          <div className="input-area">
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

            <button onClick={handleSignUp} className="signInButton">
              Cadastrar
            </button>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
}
