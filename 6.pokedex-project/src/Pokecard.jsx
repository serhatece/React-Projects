import React, { Component } from "react";
const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

const TYPE_COLORS = {
  fire: "#FDDFDF",
  water: "#DEF3FD",
  electric: "#FCF7DE",
  bug: "#F0F6D3",
  flying: "#F5F5F5",
  poison: "#E0A7F5",
  normal: "#F5F5F5",
};

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    let imgSrc = `${POKE_API}${id}.png`;
    let backgroundColor = TYPE_COLORS[type] || "#F5F5F5"; // Varsayılan renk gri

    return (
      <div className="Pokecard" style={{ backgroundColor }}>
        <h3 className="Pokecard-title">{name}</h3>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={name}></img>
        </div>
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {exp}</div>
      </div>
    );
  }
}

export default Pokecard;
