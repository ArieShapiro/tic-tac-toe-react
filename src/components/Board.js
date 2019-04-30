import React from 'react';
import Cell from './Cell.js';


function Board(props) {
    const { boardStatus, handleClick } = props;
    const board = boardStatus.map((cell,index) => {
        return <Cell is={cell} key={index} handleClick={handleClick} index={index}/>  
    });
    return (
        <div className="board">
            { board }
        </div>
    )
}

export default Board;