import React, { Component } from "react";
import "./Ball.css";

class Ball extends Component {
  render() {
    return (
      // Sayıyı görüntüleyen top bileşeni. CSS ile tasarım sağlanıyor.
      <div className="Ball">{this.props.num}</div>
    );
  }
}

export default Ball;
