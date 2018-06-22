import React from 'react';
import PropTypes from 'prop-types';
const AddUserButton = (props) => (
   <button disabled={props.disabled}>{props.buttonText || 'Add'}</button>
)
export default AddUserButton;

AddUserButton.propTypes = {
  	disabled: PropTypes.func.isRequired,
    buttonText: PropTypes.string
}