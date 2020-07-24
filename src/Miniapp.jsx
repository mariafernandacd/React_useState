import React, { useState } from "react";

const Gastos = () => {
  const [gasto, setGasto] = useState([]);

  const addElement = num => {
    setGasto([...gasto, num]);
  };
  return (
    <div>
      <button onClick={() => addElement(10)}> FISH $10</button>
      <button onClick={() => addElement(50)}>BOMBONES $50</button>
      <button onClick={() => addElement(100)}>MOGULS$100</button>
      <p>Total: {gasto.reduce((total, unidad) => total + unidad, 0)} </p>
      <ul>
        {gasto.map(item => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gastos;
