import { useState } from "react";
import Keyboard from "./Keyboard";
import CurrentWord from "./CurrentWord";
import isDisabled from "./Keyboard";

export const App = () => {
  const [gameStatus, setGameStatus] = useState("inGame");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase().split("");
  const [attempt, setAttempt] = useState(0);
  const currentWord = "mourir";

  // const allLetters = currentWord.split("").map(letter, key);
  const max = 11;
  const [usedLetter, setUsedLetter] = useState([]);
  const handleClick = (letter) => {
    if (usedLetter === currentWord.split) {
      setGameStatus("win");
    } else {
      if (attempt != max) {
        if (currentWord.indexOf(letter) === -1) {
          setAttempt(attempt + 1);
        }
        setUsedLetter([letter, ...usedLetter]);
      } else {
        setGameStatus("lose");
      }
    }
  };

  return (
    <div id="game">
      <h1>Pendu</h1>
      {max}
      <h2>Coucou</h2>
      {attempt}
      {currentWord && (
        <CurrentWord currentWord={currentWord} usedLetter={usedLetter} />
      )}
      <Keyboard
        alphabet={alphabet}
        action={handleClick}
        usedLetter={usedLetter}
      />
      {gameStatus === "lose" && <span>You lose...</span>}
      {gameStatus === "win" && <span>You win!</span>}
    </div>
  );
};
