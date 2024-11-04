import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css"; // Lottery.css dosyasını içe aktar

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    maxBalls: 6,
    maxNum: 40,
  };

  constructor(props) {
    super(props);
    this.state = { nums: Array.from({ length: this.props.maxBalls }, () => 0) };
    this.handleClick = this.handleClick.bind(this);
  }

  generate() {
    this.setState((curState) => ({
      nums: curState.nums.map(
        () => Math.floor(Math.random() * this.props.maxNum) + 1
      ),
    }));
  }

  handleClick() {
    this.generate();
  }

  render() {
    return (
      <section className="lottery-container">
        {/* Başlık */}
        <h1 className="lottery-title">{this.props.title}</h1>

        {/* Numaraları göstermek için topları oluşturma */}
        <div className="balls-container">
          {this.state.nums.map((n, idx) => (
            <Ball key={idx} num={n} />
          ))}
        </div>

        {/* Yeni numaralar oluşturma butonu */}
        <button onClick={this.handleClick} className="lottery-button">
          Günün Şanslı Sayıları!
        </button>
      </section>
    );
  }
}

export default Lottery;
