import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

/*
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Square(props) {    //receives props from Board
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return (
        <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)} //recieves props from Games, passes to Sqaure
        />
      );
    };
  
    render() {
      return (
        <div>
          <div className="board-row">
            {
                this.renderSquare(0) //passes in i, a number to its own function renderSquare()
            }
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {  //the parent
    constructor(props) {
      super(props);
      this.state = {    //initial state
        history: [
          {
            squares: Array(9).fill(null)    //game start has 9 blank squares
          }
        ],
        stepNumber: 0,
        xIsNext: true   //x should go next
      };
    }
  
    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);   //what does this do?
      const current = history[history.length - 1];  //current state is last board of history array
      const squares = current.squares.slice();  //squares from current board
      if (calculateWinner(squares) || squares[i]) { //do nothing if there is a winner or if a square is occupied
        return;
      }
      squares[i] = this.state.xIsNext ? "X" : "O";  //fill square based on player turn, change the array
      this.setState({
        history: history.concat([   //add the new board to the end of the history array
          {
            squares: squares
          }
        ]),
        stepNumber: history.length, //increment stepNumber
        xIsNext: !this.state.xIsNext    //change player turn
      });
    }
  
    jumpTo(step) {  //change state based on the step number passed in
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0
      });
    }
  
    render() {
      const history = this.state.history;   //having "this.state" for things in the parent render
      console.log(history);
      const current = history[this.state.stepNumber];   //having stepNumber here makes it possible to reverse steps
      const winner = calculateWinner(current.squares);  //see if there is a winner with the current board
  
      const moves = history.map((_, i) => {   //move is an index of history
        const desc = i ?
          'Go to move #' + i :
          'Go to game start';
        return (
          <li key={i}>
            <button onClick={() => this.jumpTo(i)}>{desc}</button>
          </li>
        );
      });
  
      let status;   //the text to show if there is a winner or to continue the game
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(<Game />, document.getElementById("root"));
  
  function calculateWinner(squares) {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
*/