import React from 'react';
import Square from './Square';
import '../index.css';

const Board = ({squares, handleClick}) => {
    const renderSquare = (i) => (
        <Square
            value={squares[i]}
            handleClick={() => handleClick(i)}
        />
    )
    console.log("Helen says hi")
    return (
        <div>
            {
                squares.map((square, i) => {
                    if (i % 3 === 0) {
                        return (
                        <div className="board-row" key={i}>
                            {renderSquare(i)}
                            {renderSquare(i+1)}
                            {renderSquare(i+2)}
                        </div>
                        )
                    } else {
                        return null;
                    }
                })
            }
            {/* <div className="board-row">
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
            </div> */}
        </div>
    );
}

export default Board;