import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.brand} - {props.names} - {props.price} - {props.pintsLeft}</h3>
        <p><em>{props.alcoholContent}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  names: PropTypes.string,
  brand: PropTypes.string,
	price: PropTypes.number,
  alcoholContent: PropTypes.number,
  pintsLeft: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;