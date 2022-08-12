import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../winnerConditional"

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (index) => {
    const boardClone = [...board];
    if (winner || boardClone[index]) return null;

    boardClone[index] = xIsNext ? "X" : "O";
    setXIsNext((prev) => !prev);

    setBoard(boardClone);
  };

  const clearBoard = () => {
    setBoard(Array(9).fill(null));
  };

  const newGame = () => {
    return (
      <button className="start-btn" onClick={clearBoard}>
        Start New Game
      </button>
    );
  };

  const condition = () => {
    if (winner) return `GAME OVER. ${winner} is WINNER!`;
    if (!board.includes(null)) return `GAME OVER. DRAW`;
    return `TURN: ${xIsNext ? "X" : "O"}`;
  };

  return (
    <div className="container">
      {newGame()}
      <Board cells={board} click={handleClick} />
      <p className="turn">{condition()}</p>
    </div>
  );
}
