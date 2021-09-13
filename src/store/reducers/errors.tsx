import { GET_ERRORS } from '../actions/types';

const errors = (state = {}, action: any) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default errors;
