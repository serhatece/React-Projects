import React from "react";
import Box from "./Box";
import "./BoxContainer.css";

const BoxContainer = ({
  numBoxes = 30,
  allColors = [
    "purple",
    "magenta",
    "brown",
    "lilac",
    "pink",
    "orange",
    "violet",
    "red",
    "blue",
    "green",
  ],
}) => {
  // Kutuları oluşturmak için numBoxes kadar bir dizi oluşturuyoruz.
  return (
    <div className="BoxContainer">
      {Array.from({ length: numBoxes }).map((_, idx) => (
        <Box key={idx} colors={allColors} /> // Her Box bileşenine benzersiz key ekleniyor.
      ))}
    </div>
  );
};

export default BoxContainer;
