import React from 'react';
import PropTypes from 'prop-types';
const SubmitButton = (props) => (
   <button onClick={props.onClick ? props.onClick : null} disabled={props.disabled}>{props.buttonText || 'Submit'}</button>
)
export default SubmitButton;

SubmitButton.propTypes = {
  	disabled: PropTypes.bool,
    buttonText: PropTypes.string
}