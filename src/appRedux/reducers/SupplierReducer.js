const Supplier = localStorage.getItem("SupplierName");
const states = {
  SUPPLIER_NAME: Supplier,
};
export const SupplierReducer = (state = states, action) => {
  switch (action.type) {
    case "Supplier":
      return { ...states, SUPPLIER_NAME: action.payload };
    default:
      return state;
  }
};
