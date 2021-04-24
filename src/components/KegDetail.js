import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>{props.brand} - {props.names} - {props.price} - {props.pintsLeft}</h3>
        <p><em>{props.alcoholContent}</em></p>
				<button onClick={ props.onClickingEdit }>Update Keg</button>
				<button onClick={()=> onClickingDelete(keg.id) }>Close Keg</button>
        <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func
};

export default KegDetail;