import React from "react";
import Cell from "./Cell";

export default function Board({ cells, click }) {
  return (
    <div className="board">
      {cells.map((cell, index) => (
        <Cell key={index} value={cell} onClick={click.bind(null, index)} />
      ))}
    </div>
  );
}
