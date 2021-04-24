import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const { keg, onClickingEdit, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h3>Name: {keg.names}</h3>
        <h3>Brand or Brewery: {keg.brand}</h3>
        { keg.price > 90
        ? <h3>Cost per Keg: ${keg.price}</h3>
        : <h3>Cost per Keg: ${keg.price}</h3>}
        <h3>Alcohol Content: {keg.alcoholContent}</h3>
        {keg.pintsLeft === 0 ?
        <h3>Out of stock! Better luck next time.</h3>
        : <h3>Pints Remaining: {keg.pintsLeft}</h3>}
        {keg.pintsLeft > 0 && keg.pintsLeft <= 10
        ? <h4><em>Almost Empty </em></h4>
        : null}
        { keg.pintsLeft > 0
        ? <button onClick={props.onClickingBuy} className="btn btn-success">Buy Pint</button>
        : <button onClick={props.onClickingRestock} className="btn btn-info">Restock Large Keg</button>}
				<button onClick={ props.onClickingEdit }>Update Keg</button>
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