import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Name: {keg.names}</h3>
        <h3>Brand or Brewery: {keg.brand}</h3>
        
        <h3>Alcohol Content: {keg.alcoholContent}</h3>
        
        <h3>Pints Remaining: {keg.pintsLeft}</h3>
        
        <button onClick={props.onClickingBuy} className="btn btn-success">Buy Pint</button>
        <button onClick={props.onClickingRestock} className="btn btn-info">Restock Large Keg</button>
				<button onClick={ ()=>onClickingEdit (keg.id)}>Update Keg</button>
				<button onClick={()=> onClickingDelete(keg.id) }>Close Keg</button>
        <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
	onClickingDelete: PropTypes.func,
	onClickingEdit: PropTypes.func,
	onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default KegDetail;