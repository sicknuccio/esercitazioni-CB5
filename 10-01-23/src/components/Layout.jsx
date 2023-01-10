import { useState } from "react";

import "./layout.css";

export function Layout(props) {
  const [numbers, setNumber] = useState([]);

  const newRandomNumber = () => {
    setNumber(() => {
      return [...numbers, Math.floor(Math.random() * 90) + 1];
    });
  };

  return (
    <>
      <div className="number">
        <h1>Estrai fino a sei numeri</h1>
        <ul>
          <li></li>
          {numbers.map((number) => (
            <li>{number}</li>
          ))}
        </ul>
      </div>

      <button
        className="btn"
        onClick={newRandomNumber}
        disabled={numbers.length === 6 ? true : false}
      >
        Estrai un numero
      </button>
    </>
  );
}
