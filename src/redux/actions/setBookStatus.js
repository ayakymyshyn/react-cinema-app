import { ACTIONS } from "./../constants";

const setBookStatusAction = status => ({
  type: ACTIONS.SET_BOOK_STATUS,
  status
});

export const setBookStatus = status => dispatch => {
  dispatch(setBookStatusAction(status));
};
