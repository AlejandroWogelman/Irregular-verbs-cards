import React from "react";
import "./modal.css";
import { useRef } from "react";

interface Prop {
  orderAleatory: () => void;
  orderAlphabet: () => void;
}

export const Modal = ({ orderAleatory, orderAlphabet }: Prop) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: any) => {
    if (e.target.name === "random") {
      orderAleatory();
      modalRef.current?.classList.add("close");
      return;
    }
    orderAlphabet();
    modalRef.current?.classList.add("close");
  };

  return (
    <div className="modal" ref={modalRef}>
      <h3>¿Quieres ordenar la lista de forma aleatoria o alfabética?</h3>
      <h4>Do you want to sort the list randomly or alphabetically?</h4>

      <div>
        <button
          className="btn"
          type="button"
          name="random"
          onClick={handleClick}
        >
          Random
        </button>
        <button
          className="btn"
          type="button"
          name="alphabetic"
          onClick={handleClick}
        >
          Alphabet
        </button>
      </div>
    </div>
  );
};
