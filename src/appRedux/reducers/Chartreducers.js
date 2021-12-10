export const Winchartreducer = (state = [], action) => {
  switch (action.type) {
    case "WINCHARTD":
      return action.payload;
    default:
      return state;
  }
};

export const Losschartreducer = (state = [], action) => {
  switch (action.type) {
    case "LOSSCHARTD":
      return action.payload;
    default:
      return state;
  }
};

export const Unresolvedchartreducer = (state = [], action) => {
  switch (action.type) {
    case "UNRESOLVEDCHARTD":
      return action.payload;
    default:
      return state;
  }
};

export const Raisedchartreducer = (state = [], action) => {
  switch (action.type) {
    case "RAISEDCHARTDS":
      return action.payload;
    default:
      return state;
  }
};

export const Newinstallchartreducer = (state = [], action) => {
  switch (action.type) {
    case "NEWINSTALLCHARTD":
      return action.payload;
    default:
      return state;
  }
};

export const Changechartreducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGECHARTD":
      return action.payload;
    default:
      return state;
  }
};

export const Disconnectchartreducer = (state = [], action) => {
  switch (action.type) {
    case "DISCONNECTCHARTD":
      return action.payload;
    default:
      return state;
  }
};

export const Disputechartreducer = (state = [], action) => {
  switch (action.type) {
    case "DISPUTECHARTD":
      return action.payload;
    default:
      return state;
  }
};

export const Indispchartreducer = (state = [], action) => {
  switch (action.type) {
    case "INDISPCHARTD":
      return action.payload;
    default:
      return state;
  }
};

export const Invoicechartreducer = (state = [], action) => {
  switch (action.type) {
    case "INVOICECHARTD":
      return action.payload;
    default:
      return state;
  }
};

export const InstallOrdersByBWreducer = (state = [], action) => {
  switch (action.type) {
    case "ORDERBYBW":
      return action.payload;
    default:
      return state;
  }
};

export const InstallOrdersByTermreducer = (state = [], action) => {
  switch (action.type) {
    case "ORDERBYTERM":
      return action.payload;
    default:
      return state;
  }
};

export const InstallOrdersByOverallreducer = (state = [], action) => {
  switch (action.type) {
    case "OVERALL":
      return action.payload;
    default:
      return state;
  }
};

export const ChangeOrdersByDatereducer = (state = [], action) => {
  switch (action.type) {
    case "ORDERBYDATE":
      return action.payload;
    default:
      return state;
  }
};

export const DisconnectOrdersreducer = (state = [], action) => {
  switch (action.type) {
    case "DISCONNECTORDER":
      return action.payload;
    default:
      return state;
  }
};

export const TopCircuitsWithChangesreducer = (state = [], action) => {
  switch (action.type) {
    case "TOPCIRCUITS":
      return action.payload;
    default:
      return state;
  }
};

export const DisputesByCategoryreducer = (state = [], action) => {
  switch (action.type) {
    case "BYCATEGORY":
      return action.payload;
    default:
      return state;
  }
};

export const InvoiceDrilldownreducer = (state = [], action) => {
  switch (action.type) {
    case "INVDRILL":
      return action.payload;
    default:
      return state;
  }
};

export const InvoicesDrillDownForMonth = (state = [], action) => {
  switch (action.type) {
    case "INVOICEDRILLDOWN":
      return action.payload;
    default:
      return state;
  }
};

export const DisputesDrillDownreducer = (state = [], action) => {
  switch (action.type) {
    case "DISPUTESDRILL":
      return action.payload;
    default:
      return state;
  }
};

export const ChangeOrdersdrilldownreducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGEDRILL":
      return action.payload;
    default:
      return state;
  }
};

export const DisconnectOrdersDrillDownreducer = (state = [], action) => {
  switch (action.type) {
    case "DISCONNECTDRILL":
      return action.payload;
    default:
      return state;
  }
};

export const InstallOrdersDrillDownreducer = (state = [], action) => {
  switch (action.type) {
    case "INSTALLDRILL":
      return action.payload;
    default:
      return state;
  }
};

export const DisputableCircuitsTablereducer = (state = [], action) => {
  switch (action.type) {
    case "DISPUTABLECIRCUITS":
      return action.payload;
    default:
      return state;
  }
};

export const Amendenturlreducer = (state = [], action) => {
  switch (action.type) {
    case "AMENDENTURL":
      return action.payload;
    default:
      return state;
  }
};

export const DisconnectOrdersDrillDownByDateReducer = (state = [], action) => {
  switch (action.type) {
    case "DISCONNECTDRILLDOWN":
      return action.payload;
    default:
      return state;
  }
};

export const InstallOrdersDrillDownByDateReducer = (state = [], action) => {
  switch (action.type) {
    case "INSTALLDRILLDOWN":
      return action.payload;
    default:
      return state;
  }
};

export const ChangeOrdersDrillDownByDateReducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGEORDERSBYDATEDRILLDOWN":
      return action.payload;
    default:
      return state;
  }
};

export const InvoiceNumberreducer = (state = [], action) => {
  switch (action.type) {
    case "INVOICENUMBER":
      return action.payload;
    default:
      return state;
  }
};

export const OpenLoseDisputesTablereducer = (state = [], action) => {
  switch (action.type) {
    case "OPENLOSEDISPUTES":
      return action.payload;
    default:
      return state;
  }
};
