import React from "react";
import "./styles.css";
import Component from "./Component";
import Collapse from "./Collapse";
import Miniapp from "./Miniapp";

export default function App() {
  return (
    <div>
      <Component text="hola chiquis" />
      <Collapse children=" " />
      <Miniapp />
    </div>
  );
}
