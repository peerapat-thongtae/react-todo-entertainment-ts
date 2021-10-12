import jwtDecode from 'jwt-decode';
import AuthService from '../../services/AuthService';
import {
  setCurrentUser,
  registerSuccess,
  logoutUser,
  getErrors,
} from './actionCreators';

/**
 * Login user action
 */
export const loginUser = (state, history) => (dispatch) => {
  AuthService.login(state.email, state.password)
    .then((resp) => {
      if (resp.data.success) {
        dispatch(setCurrentUser(resp.data.user));
        AuthService.saveToken(resp.data.user.token);
        history.push('/');
      }
    })
    .catch((error) => {
      if (error.response.data) {
        dispatch(
          getErrors({
            loginError: error.response.data.message,
          })
        );
      }
    });
};

/**
 * Logout action
 */
export const logout = (history) => (dispatch) => {
  AuthService.logout();
  dispatch(logoutUser());
  history.push('/');
  window.location.reload();
};

/**
 * Register user action
 */
export const registerUser = (data, history) => (dispatch) => {
  AuthService.register(data)
    .then((resp) => {
      if (resp.data.success) {
        dispatch(registerSuccess());
        history.push('/signin');
      }
    })
    .catch((error) => {
      if (error.response.data) {
        dispatch(
          getErrors({
            registerError: error.response.data.message,
          })
        );
      }
    });
};

export const checkExpiredToken = (history) => (dispatch) => {
  let token = AuthService.getToken();
  if (token) {
    token = jwtDecode(token);
    if (token.exp < Date.now() / 1000) {
      AuthService.logout();
      dispatch(logoutUser());
      history.push('/signin');
      // window.location.reload();
    }
  }
};
