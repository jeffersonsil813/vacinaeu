import "./card.scss";
import { ReactElement } from "react";

type cardProps = {
  onClick: any;
  cardTitle: string;
  icon: ReactElement;
  children: string;
};

export function Card({ onClick, cardTitle, icon, children }: cardProps) {
  return (
    <>
      <div className="card" onClick={onClick}>
        <div className="div-icon">{icon}</div>
        <div className="card-content">
          <h3>{cardTitle}</h3>
          <p>{children}</p>
        </div>
      </div>
    </>
  );
}
