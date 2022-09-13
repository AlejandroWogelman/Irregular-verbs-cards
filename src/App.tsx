import { useState, useEffect } from "react";
import { Card } from "./components/card/Card";
import { Modal } from "./components/modal/Modal";
import { data } from "./data";

import "./App.css";
import { Footer } from "./components/footer/Footer";

const initialState = 0;

function App() {
  const [state, setState] = useState(data);
  const [cardView, setCardView] = useState<number>(initialState);

  const nextView = () => {
    if (cardView + 1 > state.length - 1) {
      return setCardView(initialState);
    }
    setCardView(cardView + 1);
  };

  const prevView = () => {
    if (cardView - 1 < 0) {
      return setCardView(state.length - 1);
    }
    setCardView(cardView - 1);
  };

  const orderAleatory = () => {
    const randomIndex = state.sort((a, b) => Math.random() - 0.5);

    setState([...randomIndex]);
  };

  const orderAlphabet = () => setState([...state.sort((a, b) => a.id - b.id)]);

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Irregular Verbs</h1>
      </header>

      <Card card={state[cardView]} nextView={nextView} prevView={prevView} />

      <Modal orderAleatory={orderAleatory} orderAlphabet={orderAlphabet} />

      <Footer />
    </div>
  );
}

export default App;
