import { BackLink } from "../BackLink/BackLink";
import { Header } from "../Header/Header";
import "./lots.scss";

export function Lots() {
  return (
    <>
      <Header name="Saúde e Bem-estar" />
      <div className="container">
        <BackLink route="/home" />
        <div className="lots">Lotes</div>
        <div className="places">Locais</div>
      </div>
    </>
  );
}
