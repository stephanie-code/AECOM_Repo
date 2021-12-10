export const registerUserAction=(getSupplierName)=>{ 
    return async function (dispatch, getState) {
    dispatch({
        type : 'SESSION_SUPPLIER_LIST',
        payload : getSupplierName
    });
  }
  }