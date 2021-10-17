import { CLOSE_MODAL, OPEN_MODAL } from 'store/actions/types';

export const modalSearchMulti = (state: any, action: any) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        open: true,
        ...action.payload,
      };
    case CLOSE_MODAL:
      return { open: false, search: '' };
    default:
      return {};
  }
};

export const modalFilter = (state: any, action: any) => {
  switch (action.type) {
    case 'OPEN_MODAL_FILTER':
      return {
        open: true,
        ...action.payload,
      };
    case 'CLOSE_MODAL_FILTER':
      return { open: false, search: '' };
    default:
      return {};
  }
};
