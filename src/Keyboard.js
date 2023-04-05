import React from "react";
import "./App.css";

const Keyboard = ({ alphabet, action, usedLetter }) => {
  return (
    <div>
      {alphabet.map((letter, key) => {
        const isDisabled = usedLetter.includes(letter);
        return (
          <button
            key={"keyboard_" + key}
            onClick={() => action(letter)}
            disabled={isDisabled}
          >
            {letter}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
