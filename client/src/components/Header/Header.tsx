import "./header.scss";
import Logo from "../../assets/images/logo.png";
import { Button } from "../Button/Button";
import { FaUser } from "react-icons/fa";

type headerProps = {
  name: string;
};

export function Header({ name }: headerProps) {
  return (
    <header>
      <div className="content">
        <img src={Logo} alt="VacinaEu" />

        <div>
          <div className="company-name">
            <div className="icon-div">
              <FaUser size="26" className="user-icon" />
            </div>
            <span>{name}</span>
          </div>

          <Button onClick={() => alert("clicou")} className="signOutButton">
            Sair
          </Button>
        </div>
      </div>
    </header>
  );
}
