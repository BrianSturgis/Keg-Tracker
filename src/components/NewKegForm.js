import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props){

    function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({names: event.target.names.value, brand: event.target.brand.value, price: event.target.price.value,alcoholContent: event.target.alcoholContent.value, id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Names' />
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
          placeholder='alcoholContent' />
        <button type='submit'>Help!</button>
      </form>

    </React.Fragment>
  );
}
    NewKegForm.propTypes = {
      onNewKegCreation: PropTypes.func
    };

export default NewKegForm;