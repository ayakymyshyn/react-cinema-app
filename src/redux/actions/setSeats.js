import { ACTIONS } from "./../constants";

const setSeatsAction = (seats, row) => ({
  type: ACTIONS.SET_SEATS,
  seats,
  row
});

export const setSeats = (seats, row) => dispatch => {
  dispatch(setSeatsAction(seats, row));
};
