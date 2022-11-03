import { useState } from "react";
import Square from "./square";

// Concept 3: Lifting up the state

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleSquareClick = (i) => {
    console.log("Square clicked with index =", i);

    if (squares[i] !== null || winner) {
      return;
    }

    let updatedSquares = [...squares];
    updatedSquares[i] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setSquares(updatedSquares);

    let newWinner = calculateWinner(updatedSquares);
    setWinner(newWinner);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  function renderSquare(i) {
    //Concept 1:  Passing props(properties)
    return <Square value={squares[i]} onClick={() => handleSquareClick(i)} />;
  }

  return (
    <div>
      {winner ? (
        <div className="status">Winner is {winner}</div>
      ) : (
        <div className="status">Next Player : {isXNext ? "X" : "O"}</div>
      )}
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
