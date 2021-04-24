import React from "react";
import PropTypes from "prop-types";

function Ticket(props){
  return (
    <React.Fragment>
      <h3>{props.brand} - {props.names}</h3>
      <p><em>{props.alcoholContent}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
  alcoholContent: PropTypes.string
};

export default Ticket;