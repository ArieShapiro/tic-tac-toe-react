import React from 'react';

function GameState(props) {
    const { isNextX, isGameOver, winner } = props;
    const isPlaying = <h2>Next Player: {isNextX ? 'X' : 'O'}</h2>; 
    const gameOver = (winner !== 'none') ? (<h2>The winner is: {winner}</h2>) : (<h2>***No winner***</h2>); 
    return (
        <div>
            { !isGameOver ? isPlaying : gameOver }
        </div>
    )
}

export default GameState;