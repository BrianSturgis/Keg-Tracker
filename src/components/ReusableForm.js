import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='name of beer' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
        <input
          name='price'
          placeholder='Price' />
				<input
          type='text'
          name='alcoholContent'
          placeholder='alcoholContent and type' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;