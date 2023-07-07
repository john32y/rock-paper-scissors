import React from 'react';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: null,
      computerChoice: null,
      result: null,
    };
  }

  handleChoice = (choice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result;
    if (choice === computerChoice) {
      result = "It's a tie!";
    } else if (
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'You win!';
    } else {
      result = 'You lose!';
    }

    this.setState({
      userChoice: choice,
      computerChoice,
      result,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Rock!, Paper!!, Scissors!!!💥</h1>
        <div className="choices">
          <button onClick={() => this.handleChoice('rock')}>🗿Rock🗿</button>
          <button onClick={() => this.handleChoice('paper')}>🧻Paper🧻</button>
          <button onClick={() => this.handleChoice('scissors')}>✂️Scissors✂️</button>
        </div>
        <div className="result">
          {this.state.result && (
            <>
              <p>You chose {this.state.userChoice}</p>
              <p>Computer chose {this.state.computerChoice}</p>
              <p>{this.state.result}</p>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;

