import { combineReducers } from 'redux';
import user from './user';
import errors from './errors';
import loader from './loader';
import { modalSearchMulti } from './modal';

export default combineReducers({
  user,
  errors,
  loader,
  modalSearchMulti,
});
