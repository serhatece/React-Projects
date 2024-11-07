import React from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = React.memo(({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
});

export default CardList;
