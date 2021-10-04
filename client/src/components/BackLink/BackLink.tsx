import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./backLink.scss";

export function BackLink({ route }: any) {
  return (
    <Link className="backLink" to={route}>
      <BiArrowBack size="20" /> Voltar
    </Link>
  );
}
