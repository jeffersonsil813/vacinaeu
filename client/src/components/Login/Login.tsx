import Logo from "../../assets/images/logo.png";
import "./login.scss";

import React, { useState } from "react";
import { Button } from "../Button/Button";
import Axios from "axios";
import { useHistory } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleSignUp() {
    history.push("/register");
  }

  async function handleSignIn() {
    if (email.trim() !== "" && password.trim() !== "") {
      await Axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      })
        .then((response) => {
          history.push("/home");
        })
        .catch((error) => {
          if (error.message === "Request failed with status code 400") {
            toast.error("Dados inválidos!", {
              duration: 3000,
            });
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
      <div className="login-container">
        <div className="main">
          <div className="main-content">
            <Link
              to="/"
              onClick={() => {
                setEmail("");
                setPassword("");
              }}
              className="logo-link"
            >
              <img src={Logo} alt="VacinaEu" />
            </Link>
            <Button onClick={handleSignUp} className="signupButton">
              Cadastre-se
            </Button>
            <div className="separator">Ou faça login</div>

            <div className="input-area">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entre com seu e-mail"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha"
              />
              <button onClick={handleSignIn} className="signinButton">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>

      <Toaster />
    </>
  );
}
