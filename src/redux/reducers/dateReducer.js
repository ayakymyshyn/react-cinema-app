import { GET_SHEDULE } from '../actions/getShedule';

const initialState = {
  date: ""
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHEDULE:
      return {
        ...state,
        date: action.dates
      };
    default:
      return state;
  }
};

export default dateReducer;
