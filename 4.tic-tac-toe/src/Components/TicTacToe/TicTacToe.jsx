import "./TicTacToe.css"; // Stil dosyasını içe aktar
import circle_icon from "../Assets/circle.png"; // O sembolü için resim
import cross_icon from "../Assets/cross.png"; // X sembolü için resim
import { useRef, useState } from "react"; // React Hook'larını içe aktar

let data = ["", "", "", "", "", "", "", "", ""]; // Oyun tahtası verilerini tutar

const TicTacToe = () => {
  const [count, setCount] = useState(0); // Hamle sayısını takip eder
  const [lock, setLock] = useState(false); // Oyun bitti mi kontrol eder
  const [playerSymbol, setPlayerSymbol] = useState(null); // Kullanıcının seçtiği sembol
  const [winnerSymbol, setWinnerSymbol] = useState(null); // Kazanan sembolü (henüz kullanılmıyor)
  const titleRef = useRef(null); // Başlık elementini referans alır
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);
  const box5 = useRef(null);
  const box6 = useRef(null);
  const box7 = useRef(null);
  const box8 = useRef(null);
  const box9 = useRef(null);

  // Tüm kutuların referanslarını bir diziye toplar
  const box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

  // Kullanıcı sembolünü seçer ve oyunu sıfırlar
  const handleSymbolSelection = (symbol) => {
    setPlayerSymbol(symbol);
    reset(); // Seçimden sonra oyunu sıfırla
  };

  // Oyun kutusuna tıklama işlemi
  const toggle = (e, num) => {
    if (lock || data[num] || !playerSymbol) {
      return; // Oyun bitti veya kutu doluysa işlem yapma
    }
    // Hamle sırasına göre sembolü belirle
    const currentSymbol =
      count % 2 === 0 ? playerSymbol : playerSymbol === "x" ? "o" : "x";
    // Sembolu kutuda göster
    e.target.innerHTML = `<img src='${
      currentSymbol === "x" ? cross_icon : circle_icon
    }' alt='${currentSymbol}'>`;
    data[num] = currentSymbol; // Hamle verilerini güncelle
    setCount(count + 1); // Hamle sayısını artır
    checkWin(); // Kazananı kontrol et
  };

  // Kazananı veya berabere durumunu kontrol eder
  const checkWin = () => {
    // Kazanma kombinasyonları
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    // Her kazanma kombinasyonunu kontrol et
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (data[a] && data[a] === data[b] && data[a] === data[c]) {
        won(data[a], combination); // Kazananı belirle
        return;
      }
    }

    // Eğer tüm kutular doluysa ve kimse kazanmadıysa
    if (count === 8 && !lock) {
      draw(); // Beraberlik durumu
    }
  };

  // Kazanan durumunu işle
  const won = (winner, winningCombination) => {
    setLock(true); // Oyun bitmiş olarak işaretle
    winningCombination.forEach((index) => {
      box_array[index].current.classList.add("highlight"); // Kazanan kombinasyonunu vurgula
    });

    setWinnerSymbol(winner); // Kazanan sembolü ayarla

    // Kazanan sembolüne göre mesajı güncelle
    if (winner === playerSymbol) {
      titleRef.current.innerHTML = `Congratulations: <img src=${
        winner === "x" ? cross_icon : circle_icon
      } alt='${winner}'> Wins`;
    } else {
      titleRef.current.innerHTML = `Sorry: <img src=${
        winner === "x" ? cross_icon : circle_icon
      } alt='${winner}'> Wins`;
    }
  };

  // Beraberlik durumunu işle
  const draw = () => {
    setLock(true); // Oyun bitmiş olarak işaretle
    titleRef.current.innerHTML = "It's a Draw!"; // Beraberlik mesajı
  };

  // Oyun tahtasını sıfırlar
  const reset = () => {
    setLock(false); // Oyun kilidini kaldır
    data = ["", "", "", "", "", "", "", "", ""]; // Tahtayı sıfırla
    setCount(0); // Hamle sayısını sıfırla
    titleRef.current.innerHTML = "Select Your Symbol"; // Başlık mesajını sıfırla
    box_array.forEach((box) => {
      box.current.innerHTML = ""; // Kutuları temizle
      box.current.classList.remove("highlight"); // Vurgulamayı kaldır
    });
    setPlayerSymbol(null); // Kullanıcı sembolünü sıfırla
    setWinnerSymbol(null); // Kazanan sembolünü sıfırla
  };

  return (
    <div className="container">
      {!playerSymbol ? (
        <div className="symbol-selection">
          <h2>Select Your Symbol:</h2>
          <button
            className="symbol-button"
            onClick={() => handleSymbolSelection("x")}
          >
            <img src={cross_icon} alt="X" /> Play as X
          </button>
          <button
            className="symbol-button"
            onClick={() => handleSymbolSelection("o")}
          >
            <img src={circle_icon} alt="O" /> Play as O
          </button>
        </div>
      ) : (
        <>
          <h1 className="title" ref={titleRef}>
            Tic Tac Toe Game
          </h1>
          <div className="board">
            <div className="row1">
              <div
                className="boxes"
                ref={box1}
                onClick={(e) => toggle(e, 0)}
              ></div>
              <div
                className="boxes"
                ref={box2}
                onClick={(e) => toggle(e, 1)}
              ></div>
              <div
                className="boxes"
                ref={box3}
                onClick={(e) => toggle(e, 2)}
              ></div>
            </div>
            <div className="row2">
              <div
                className="boxes"
                ref={box4}
                onClick={(e) => toggle(e, 3)}
              ></div>
              <div
                className="boxes"
                ref={box5}
                onClick={(e) => toggle(e, 4)}
              ></div>
              <div
                className="boxes"
                ref={box6}
                onClick={(e) => toggle(e, 5)}
              ></div>
            </div>
            <div className="row3">
              <div
                className="boxes"
                ref={box7}
                onClick={(e) => toggle(e, 6)}
              ></div>
              <div
                className="boxes"
                ref={box8}
                onClick={(e) => toggle(e, 7)}
              ></div>
              <div
                className="boxes"
                ref={box9}
                onClick={(e) => toggle(e, 8)}
              ></div>
            </div>
          </div>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
};

export default TicTacToe;
