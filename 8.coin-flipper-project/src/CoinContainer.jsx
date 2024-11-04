import React, { useState, useCallback } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";
import "./CoinContainer.css";

function CoinContainer({
  coins = [
    {
      side: "tails",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/1TL_obverse.png",
    },
    {
      side: "heads",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/c/cd/1TL_reverse.png",
    },
  ],
}) {
  const [currCoin, setCurrCoin] = useState(null);
  const [nFlips, setNFlips] = useState(0);
  const [nHeads, setNHeads] = useState(0);
  const [nTails, setNTails] = useState(0);

  const flipCoin = useCallback(() => {
    const newCoin = choice(coins);
    setCurrCoin(newCoin);
    setNFlips((prev) => prev + 1);
    setNHeads((prev) => prev + (newCoin.side === "heads" ? 1 : 0));
    setNTails((prev) => prev + (newCoin.side === "tails" ? 1 : 0));
  }, [coins]);

  return (
    <div className="coin-container">
      <h1 className="coin-header">Madeni Para Oyunu</h1>
      {currCoin && <Coin info={currCoin} />}
      <button className="flip-button" onClick={flipCoin}>
        Fırlat!
      </button>
      <p className="flip-summary">
        Yapılan toplam fırlatma: {nFlips}, Bunların:
        {nTails} tanesi yazı ve {nHeads} tanesi de turadır.
      </p>
    </div>
  );
}

export default CoinContainer;
