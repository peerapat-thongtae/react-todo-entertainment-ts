import {
  openModal,
  closeModal,
  searchTextModal,
  openModalFilter,
  closeModalFilter,
} from './actionCreators';

export const setOpenModal = (payload = {}) => (dispatch) => {
  dispatch(openModal(payload));
};

export const setCloseModal = () => (dispatch) => {
  dispatch(closeModal());
};

export const setOpenModalFilter = (payload = {}) => (dispatch) => {
  dispatch(openModalFilter(payload));
};

export const setCloseModalFilter = () => (dispatch) => {
  dispatch(closeModalFilter());
};

export const setSearchTextModal = () => (dispatch) => {
  dispatch(searchTextModal());
};
