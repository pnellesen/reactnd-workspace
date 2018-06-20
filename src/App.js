import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  getRandomVal = (seed) => {return Math.floor(Math.random() * seed)};
  
  initialState = {
    value1 : this.getRandomVal(100),
	value2 : this.getRandomVal(100),
	value3 : this.getRandomVal(100),
	numQuestions : 0,
	numCorrect : 0
  }

  state = this.initialState;
  
  proposedAnswer = null;

  createNewQuestion() {
  	this.setState((prevState) => ({
  		value1 : this.getRandomVal(100),
		value2 : this.getRandomVal(100),
		value3 : this.getRandomVal(100),
    	numQuestions: prevState.numQuestions + 1
  	}))
  }

  checkAnswer(userAnswer) {
    const correctAnswer = this.state.value1 + this.state.value2 + this.state.value3;
    console.log("Check answer: proposedAnswer: " + this.proposedAnswer + " - correctAnswer: " + correctAnswer);
  	if (userAnswer == (correctAnswer == this.proposedAnswer)) {
    	this.setState((prevState) => ({
        	numCorrect: prevState.numCorrect + 1
        }))
    }
    this.createNewQuestion()
  }

  reset() {
    // From reactjs.org docs - https://reactjs.org/docs/react-component.html#setstate
    // You may optionally pass an object as the first argument to setState() instead of a function
  	this.setState(this.initialState);
  }
  
render() {
    this.proposedAnswer = this.getRandomVal(3) + this.state.value1 + this.state.value2 + this.state.value3;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.checkAnswer(true)}>True</button>
          <button onClick={() => this.checkAnswer(false)}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
		<button onClick={() => this.reset()}>Reset</button>
        </div>
      </div>
    );

  }
}

export default App;
