import React from 'react';

function Cell(props) {
    return (
        <div className="cell" onClick={() => {props.handleClick(props.index)}}>
            { props.is }
        </div>
    )
}

export default Cell;