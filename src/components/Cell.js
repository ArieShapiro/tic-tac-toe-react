import React from 'react';

function Cell(props) {
    return (
        <div className="cell" onClick={() => { props.handleClick(props.index) }}>
            <span> {props.is ? props.is : ' '} </span>
        </div>
    )
}

export default Cell;