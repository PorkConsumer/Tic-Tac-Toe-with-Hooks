import React, { useState } from 'react';
import { calculateWinner } from '../helpers';
import Board from './Board';
import '../index.css';

const Game = () => {  
    const[history, setHistory] = useState([Array(9).fill(null)]);
    const[stepNumber, setStepNumber] = useState(0);
    const[xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);

    const handleClick = (i) => {
        const timeInHistory = history.slice(0, stepNumber + 1); 
        const current = timeInHistory[stepNumber];  
        const squares = [...current]; 
        // If user click an occupied square or if game is won, return
        if (winner || squares[i]) return;
        // Put an X or an O in the clicked square
        squares[i] = xIsNext ? "X" : "O";
        setHistory([...timeInHistory, squares]);  
        setStepNumber(timeInHistory.length);
        setXisNext(!xIsNext); 
    }

    const jumpTo = (step) => { 
        setStepNumber(step);
        setXisNext((step % 2) === 0);
    };

    const renderMoves = () => (
        history.map((_, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
            );
        })
    )

    let status;   
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={
                history[stepNumber]   //an array of 9 squares
            }
            onClick={
                handleClick //passing in a function
            }
          /> 
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{renderMoves()}</ol>
        </div>
      </div>
    );
}

export default Game;