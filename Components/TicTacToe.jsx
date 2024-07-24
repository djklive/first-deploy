// components/TicTacToe.js
'use client'
import calculateWinner from '../Utils/CalculateWinner';

import React, { useState, useEffect } from 'react';
import Square from './Square';

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const winner = calculateWinner(squares);
    if (winner) {
      setStatus(`Gagnant : ${winner}`);
    } else if (squares.every(square => square !== null)) {
      setStatus('Match nul !');
    } else {
      setStatus(`Prochain joueur : ${xIsNext ? 'X' : 'O'}`);
    }
  }, [squares, xIsNext]);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setStatus('');
  };

  return (
    <div className="game">
      <div className="game-board">
        {[0, 1, 2].map((row) => (
          <div key={row} className="board-row">
            {[0, 1, 2].map((col) => (
              <Square
                key={row * 3 + col}
                value={squares[row * 3 + col]}
                onClick={() => handleClick(row * 3 + col)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={resetGame}>Nouvelle partie</button>
      </div>
    </div>
  );
};



export default TicTacToe;