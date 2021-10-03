import Logo from "../../assets/images/logo.png";
import "./style.scss";

import React, { useState } from "react";
import { Button } from "../Button/Button";
import Axios from "axios";
import { Redirect, useHistory } from "react-router";

export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const history = useHistory();

  function handleSignUp() {
    history.push("/register");
  }

  function handleSignIn() {
    // Axios.get("http:localhost:3001/login").then((response) => {
    //   console.log(response.data);
    // });
  }

  return (
    <>
      <div className="background">
        <div className="main">
          <div className="main-content">
            <img src={Logo} alt="VacinaEu" />
            <Button onClick={handleSignUp} className="signupButton">
              Cadastre-se
            </Button>
            <div className="separator">Ou faça login</div>

            <form onSubmit={handleSignIn}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entre com seu e-mail"
              />
              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Sua senha"
              />
              <button type="submit" className="signinButton">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
