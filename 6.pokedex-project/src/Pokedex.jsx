import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const { isWinner, exp, pokemon } = this.props;
    const title = isWinner ? (
      <h2 className="Pokedex-winner">Winning Player</h2>
    ) : (
      <h2 className="Pokedex-loser">Losing Player</h2>
    );

    return (
      <div className="Pokedex">
        {title}
        <h4 className="Pokedex-exp">Total Experience: {exp}</h4>
        <div className="Pokedex-cards">
          {pokemon.map((p) => (
            <Pokecard
              key={p.id}
              id={p.id}
              name={p.name}
              type={p.type}
              exp={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
