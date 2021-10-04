import "./home.scss";
import { Header } from "../Header/Header";
import { Card } from "../Card/Card";
import { BsBoxSeam, FaSyringe, MdSpaceDashboard } from "react-icons/all";
import { useHistory } from "react-router";

export function Home() {
  const history = useHistory();

  return (
    <>
      <Header name="Saúde e Bem-estar" />
      <div className="card-container">
        <Card
          onClick={() => history.push("/lots")}
          cardTitle="Lotes/Locais de Distribuição"
          icon={<BsBoxSeam size="80" className="icon" />}
        >
          Cadastre os lotes de vacinas e locais de distribuição da sua empresa
        </Card>

        <Card
          onClick={() => history.push("/vaccines")}
          cardTitle="Vacinas"
          icon={<FaSyringe size="80" className="icon" />}
        >
          Vacine ou veja quem já foi vacinado(a)
        </Card>

        <Card
          onClick={() => history.push("/reports")}
          cardTitle="Dashboards/Relatórios"
          icon={<MdSpaceDashboard size="80" className="icon" />}
        >
          Visualize dashboards e relatórios sobre a atividade da sua empresa
        </Card>
      </div>
    </>
  );
}
