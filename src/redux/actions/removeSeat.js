import { ACTIONS } from "./../constants";

const removeSeatAction = seat => ({
  type: ACTIONS.REMOVE_SEAT,
  seat
});

export const removeSeat = seat => dispatch => {
  dispatch(removeSeatAction(seat));
};
