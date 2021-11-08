import { LOADING_STATUS } from '../actions/types';

const loader = (state = {}, action: any) => {
  switch (action.type) {
    case LOADING_STATUS:
      return {
        isLoading: action.payload,
      };
    default:
      return {
        isLoading: false,
      };
  }
};

export default loader;
