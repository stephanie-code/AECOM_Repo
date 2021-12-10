export const SupplierListreducer=(state=[],action)=>{
    switch (action.type) {
      case "Supplier_List":
        return action.payload;
      default:
        return state;
    }
  }
  