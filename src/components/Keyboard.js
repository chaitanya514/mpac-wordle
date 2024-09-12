import React from "react";
import "../styles/key-board.css";

const Keyboard = () => {
  const virtualKeyboardRows = [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    ["enter", "z", "x", "c", "v", "b", "n", "m", "back"],
  ];
  const handleVirtualBtnClick = (btnVal) =>{
    console.log(btnVal)
  }
  return (
    <div className="keyboard-container">
      {virtualKeyboardRows.map((key) => (
        <div className="keyboard-row">
          {key.map((keyVal) => (
            <div className="key-btn" onClick = {()=>handleVirtualBtnClick(keyVal)}>{keyVal}</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
