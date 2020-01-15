import React from "react";
import { connect } from "react-redux";

const SeatsInfo = ({ info, bookFunc }) => {
  let price = 0;
  return (
    <div className="">
      <div className="row justify-content-end">
        {info.length > 0 ? (
          <div className="summary-info">
            {info &&
              info.map(el => {
                price += el.price;
                return <h5>{`Row: ${el.row + 1}, seat: ${el.seat + 1}`}</h5>;
              })}
            <h4>Total: {price}$</h4>
            <button
              type="button"
              className="btn btn-primary"
              onClick={bookFunc}
            >
              Book ticket
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  info: state.moviesReducer.selectedSeats
});

export default connect(mapStateToProps)(SeatsInfo);
