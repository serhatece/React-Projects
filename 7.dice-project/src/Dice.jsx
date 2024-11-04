import React from "react";
import "./Dice.css";

const Dice = ({ face, rolling }) => {
  const cls = `fa-solid fa-8x Dice fa-dice-${face} ${rolling ? "shaking" : ""}`;
  return <i className={cls}></i>;
};

export default Dice;
