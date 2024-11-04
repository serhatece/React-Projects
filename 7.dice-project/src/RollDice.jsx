import React, { useState } from "react";
import Dice from "./Dice";
import "./RollDice.css";

const RollDice = ({
  sides = ["one", "two", "three", "four", "five", "six"],
}) => {
  const [dice, setDice] = useState({ dice1: "one", dice2: "two" });
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    const newDice1 = sides[Math.floor(Math.random() * sides.length)];
    const newDice2 = sides[Math.floor(Math.random() * sides.length)];

    setDice({ dice1: newDice1, dice2: newDice2 });

    setTimeout(() => {
      setRolling(false);
    }, 1000);
  };

  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Dice face={dice.dice1} rolling={rolling} />
        <Dice face={dice.dice2} rolling={rolling} />
      </div>
      <button onClick={roll} disabled={rolling}>
        {rolling ? "Hooop..." : "Bul Karaya Al Parayı"}
      </button>
    </div>
  );
};

export default RollDice;
