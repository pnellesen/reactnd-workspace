import React, { Component } from 'react';
import UserEntryForm from './UserEntryForm.js';
import UserList from './UserList.js';
import logo from './logo.svg';
import './App.css';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
  	users: [],
    showGamesPlayed: true
  }

  addUser = (user) => {
  	this.setState(oldState => ({
      users: [...oldState.users, {firstname: user.firstname, lastname: user.lastname, username: user.username, gamesplayed: user.gamesplayed}]
      // this has... odd... behavior: users: [...oldState.users, user]
    }));
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
      </div>
    );
  }
}

export default App;

