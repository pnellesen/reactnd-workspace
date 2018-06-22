// This copied from Controlled Component exercise 2 - is almost exactly what we'll need for the name fields
import React from 'react';
import PropTypes from 'prop-types';
import SubmitButton from './SubmitButton.js';
import './EntryForm.css';

class UserEntryForm extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    username: '',
    gamesplayed: 0
  }
  handleChange = (event) => {
    event.persist();
    this.setState((prevState) => {// This from https://stackoverflow.com/a/38779819/3088853
      prevState[event.target.name] = event.target.value;
      return prevState;
    })
  };

  submit = event => {
    event.preventDefault();
    this.props.submit(this.state);
  };

inputIsEmpty = () => {
    return (this.state.firstname === '' || this.state.lastname === '' || this.state.username === '');
  };
render() {
    return (
    	<form onSubmit={this.submit}>
          <input
         	name="firstname"
            type="text"
            placeholder={this.props.fn_placeholder || 'First Name'}
            value={this.state.firstname}
            onChange={this.handleChange}
          />
         <input
         	name="lastname"
            type="text"
            placeholder={this.props.ln_placeholder || 'Last Name'}
            value={this.state.lastname}
            onChange={this.handleChange}
          />
         <input
         	name="username"
            type="text"
            placeholder={this.props.un_placeholder || 'Username'}
            value={this.state.username}
            onChange={this.handleChange}
          />
    	  <SubmitButton disabled={this.inputIsEmpty()} buttonText={'Add User'}/>
        </form>
      )
  }
}
export default UserEntryForm;

UserEntryForm.propTypes = {
	ln_placeholder: PropTypes.string,
  	fn_placeholder: PropTypes.string,
  	un_placeholder: PropTypes.string,
    submit: PropTypes.func.isRequired,
  
}