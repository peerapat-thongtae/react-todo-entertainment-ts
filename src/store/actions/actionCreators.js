import {
  SET_CURRENT_USER,
  REGISTER_SUCCESS,
  LOGOUT,
  GET_ERRORS,
  LOADING_STATUS,
  OPEN_MODAL,
  CLOSE_MODAL,
} from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
}

export function registerSuccess() {
  return {
    type: REGISTER_SUCCESS,
  };
}

export function logoutUser() {
  return {
    type: LOGOUT,
  };
}

export function getErrors(errors) {
  return {
    type: GET_ERRORS,
    payload: errors,
  };
}

export function loadingPage(status) {
  return {
    type: LOADING_STATUS,
    payload: status,
  };
}

export function openModal(payload) {
  return {
    type: OPEN_MODAL,
    payload,
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}

export function openModalFilter(payload) {
  return {
    type: 'OPEN_MODAL_FILTER',
    payload,
  };
}

export function closeModalFilter() {
  return {
    type: 'CLOSE_MODAL_FILTER',
  };
}

export function searchTextModal(search) {
  return {
    search,
  };
}
