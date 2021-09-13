export const modalBillDetailReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer, billData: action.billData };
    case 'CLOSE_MODAL':
      return { open: false, billData: {} };
    default:
      throw new Error();
  }
};

export const modalAddMatchReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { open: true, dimmer: action.dimmer };
    case 'ADD_MATCH':
      return { open: false, matchData: action.matchData };
    case 'CLOSE_MODAL':
      return { open: false, matchData: {} };
    default:
      throw new Error();
  }
};
