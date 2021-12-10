
export const RequestReducer = (state , action) => {
  switch (action.type) {
    case "SESSION_SUPPLIER_LIST":
      
      return action.payload;
    default:
      return state;
  }
};


