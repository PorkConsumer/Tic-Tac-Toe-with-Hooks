import React from 'react';
import '../index.css';

const Square = ({value, handleClick}) => (
    <button className="square" onClick={handleClick}>
        {value}
    </button>
);

export default Square;      