import { openModal, closeModal, searchTextModal } from './actionCreators';

export const setOpenModal = (payload = {}) => (dispatch) => {
  dispatch(openModal(payload));
};

export const setCloseModal = () => (dispatch) => {
  dispatch(closeModal());
};

export const setSearchTextModal = () => (dispatch) => {
  dispatch(searchTextModal());
};
