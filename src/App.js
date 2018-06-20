import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/*
const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;
*/
class App extends Component {
  state = {
  	value1 : Math.floor(Math.random() * 100),
	value2 : Math.floor(Math.random() * 100),
	value3 : Math.floor(Math.random() * 100),
	numQuestions : 0,
	numCorrect : 0
  }
  createNewQuestion() {
  	this.setState((prevState) => ({
  		value1 : Math.floor(Math.random() * 100),
		value2 : Math.floor(Math.random() * 100),
		value3 : Math.floor(Math.random() * 100),
    	numQuestions: prevState.numQuestion++
  	}))
  }
  checkAnswer(answer) {
    
  	if (true) {
    	this.setState((prevState) => ({
        	numCorrect: prevState.numCorrect++
        }))
    }
    this.createNewQuestion()
  }
  render() {
  	let proposedAnswer = Math.floor(Math.random() * 3) + this.state.value1 + this.state.value2 + this.state.value3;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${proposedAnswer}`}</p>
          </div>
          <button>True</button>
          <button>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
