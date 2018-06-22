import React from 'react';
import PropTypes from 'prop-types';
const ToggleGamesPlayedButton = (props) => (
  <button onClick={props.onClick} disabled={props.disabled}>
  {props.buttonText || 'Delete'}
  </button>
)
export default ToggleGamesPlayedButton;

RemoveItemButton.propTypes = {
	onClick : PropTypes.func.isRequired,
  	disabled: PropTypes.func.isRequired,
    buttonText: PropTypes.string
}