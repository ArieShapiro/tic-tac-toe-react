import React from 'react';
import GameState from './components/GameState.js';
import Board from './components/Board.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boardStatus: Array(9).fill(null),
      isGameOver: false,
      isNextX: true,
      winner: null
    }

    this.handleClick = this.handleClick.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  handleClick(index) {
    let boardStatus = [...this.state.boardStatus];
    boardStatus[index] = this.state.isNextX ? 'X' : 'O';
    this.setState({ boardStatus: boardStatus }, () => {
      if (true) {
        this.checkWinner()
        // console.log('A Winner!!!!!!!!!!')
      } else if (this.state.boardStatus.includes(null)) {
        this.setState(state => ({ isNextX: !state.isNextX }));
      } else if (!this.state.isGameOver) {
        this.setState(state => ({ isGameOver: !state.isGameOver }));
      }
    })
  }

  checkWinner() {
    const board = this.state.boardStatus;
    if ((board[0] === board[1] && board[1] === board[2] && board[2] !== null) ||
      (board[3] === board[4] && board[4] === board[5] && board[5] !== null) ||
      (board[6] === board[7] && board[7] === board[8] && board[8] !== null) ||

      (board[0] === board[3] && board[3] === board[6] && board[6] !== null) ||
      (board[1] === board[4] && board[4] === board[7] && board[7] !== null) ||
      (board[2] === board[5] && board[5] === board[8] && board[8] !== null) ||

      (board[0] === board[4] && board[4] === board[8] && board[8] !== null) ||
      (board[2] === board[4] && board[4] === board[6] && board[6] !== null)
    ) {
      console.log('Win!!!')
      return true;
    } else {
      console.log('No Win...')
      return false;
    }
  }

  render() {
    const { isNextX, isGameOver, winner, boardStatus } = this.state;
    return (
      <div className="App">
        <header>
          <h1>Tic Tac Toe</h1>
        </header>
        <GameState isNextX={isNextX} isGameOver={isGameOver} winner={winner} />
        <Board boardStatus={boardStatus} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
