import React, { Component } from 'react';
import UserEntryForm from './UserEntryForm.js';
import UserList from './UserList.js';
import SubmitButton from './SubmitButton.js';
import logo from './logo.svg';
import './App.css';
import './EntryForm.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
  	users: [],
    showGamesPlayed: true,
    invalidUserName: ''
  }

  addUser = (user) => {
    this.checkUserName(user) ? (
      this.setState(oldState => ({
        users: [...oldState.users, {...user}],
        invalidUserName: ''
      }))
      ) : (
      	this.setState({invalidUserName: user.username})
      )
  }
  checkUserName(user) {
    	return (
    		this.state.users.filter((existingUser) => (existingUser.username == user.username)).length == 0
    	)
    }
  toggleGamesPlayed() {
    this.setState(prevState => ({showGamesPlayed: !prevState.showGamesPlayed}))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
       <UserEntryForm submit={(user) => this.addUser(user)}/>
  		<UserList users={this.state.users} showGamesPlayed={this.state.showGamesPlayed}/>
		<div><SubmitButton onClick={() => {this.toggleGamesPlayed()}} buttonText={this.state.showGamesPlayed ? 'Hide games played' : 'Show games played'}/></div>
		<div className={this.state.invalidUserName != '' ? 'error_show' : 'error_hide'}>Username {this.state.invalidUserName} already exists</div>
      </div>
    );
  }
}

export default App;

