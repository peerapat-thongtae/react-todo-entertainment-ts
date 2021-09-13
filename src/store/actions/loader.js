import { loadingPage } from './actionCreators';

export const setLoadingPage = (loadingStatus) => (dispatch) => {
  dispatch(loadingPage(loadingStatus));
};
