import React, { useState } from "react";
import { choice } from "./helpers";
import "./Box.css";

const Box = ({ colors }) => {
  // Renk durumunu tutan state, ilk başta rastgele bir renk ile başlatılıyor.
  const [color, setColor] = useState(choice(colors));

  // Yeni bir rastgele renk seçilir, mevcut renkle aynı değilse state güncellenir.
  const pickColor = () => {
    let newColor;
    do {
      newColor = choice(colors);
    } while (newColor === color); // Aynı renk seçilmemesi sağlanıyor
    setColor(newColor);
  };

  return (
    <div
      className="Box"
      style={{ backgroundColor: color }}
      onClick={pickColor} // Tıklanınca pickColor fonksiyonu çalışır ve renk değişir.
    ></div>
  );
};

export default Box;
