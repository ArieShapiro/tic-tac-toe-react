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
    if (!this.checkWinner() && !this.state.boardStatus[index]) {
      let boardStatus = [...this.state.boardStatus];
      boardStatus[index] = this.state.isNextX ? 'X' : 'O';
      this.setState({
        boardStatus
      }, () => {
        if (this.state.boardStatus.includes(null) && !this.checkWinner()) {
          this.setState(state => ({
            isNextX: !state.isNextX
          }));
        } else if (!this.state.isGameOver) {
          this.setState(state => ({
            isGameOver: !state.isGameOver
          }));
          if (this.checkWinner()) {
            console.log('We have a winner!')
            this.setState({
              winner: this.state.boardStatus[index]
            });
          } else {
            console.log('No winner...  :(')
            this.setState({
              winner: 'none'
            });
          }
        }
      })
    } else if (this.checkWinner()) {
      this.setState({
        isGameOver: !this.state.isGameOver
      });
    }
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

      return true;
    } else {
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
