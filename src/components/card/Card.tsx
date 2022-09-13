import { useRef } from "react";
import { Data } from "../../interfaces";
import "./card.css";

interface Prop {
  card: Data;
  nextView: () => void;
  prevView: () => void;
}

export const Card = ({ card, nextView, prevView }: Prop) => {
  const { past, pastPronuntiation, present, pronuntiation, spanish } = card;

  const cardRef = useRef<HTMLElement>(null);

  const rotate = () => {
    cardRef.current?.classList.toggle("rotate");
  };

  const handleClick = (name: string) => {
    if (cardRef.current?.classList.contains("rotate")) {
      cardRef.current?.classList.remove("rotate");
    }
    name === "prev" ? prevView() : nextView();
  };

  return (
    <>
      <article ref={cardRef} className="card">
        <div className="card-content front">
          <h3>{present}</h3>
          <p>{pronuntiation}</p>
          <span>{spanish}</span>
        </div>
        <div className="card-content back">
          <h3>{past}</h3>
          <p>{pastPronuntiation}</p>
        </div>
      </article>

      <div className="buttons">
        <button
          className="btn btn-next"
          type="button"
          onClick={() => handleClick("prev")}
        >
          Anterior
        </button>
        <button className="btn btn-rotate" type="button" onClick={rotate}>
          Girar
        </button>
        <button
          className="btn btn-next"
          type="button"
          onClick={() => handleClick("next")}
        >
          Siguiente
        </button>
      </div>
    </>
  );
};
