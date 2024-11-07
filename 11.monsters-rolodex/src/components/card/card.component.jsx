import React from "react";
import "./card.styles.css";

const Card = React.memo(({ monster }) => {
  return (
    <div className="card-container">
      <img
        alt={`monster ${monster.name}`}
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        loading="lazy" // Lazy loading for performance
      />
      <h2>{monster.name}</h2>
      <p>{monster.email}</p>
    </div>
  );
});

export default Card;
