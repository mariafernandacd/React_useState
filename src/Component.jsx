import React, { useState } from "react";

const Component = ({ text }) => {
  const [color, setColor] = useState(true);

  const switchee = () => {
    setColor(!color);
  };
  return (
    <p
      onClick={switchee}
      style={{ color: color ? "red" : "black" }}
      className={color ? "texto-color" : "texto-color-black"}
    >
      {text}
    </p>
  );
};
export default Component;
