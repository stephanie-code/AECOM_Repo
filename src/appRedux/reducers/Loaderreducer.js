const states = {
  DirectLineController: false,
  ChatBotToggler: true,
  OpenLoseDrillDownLoader: false,
  InvoiceAmountDrillDownLoader: false,
  DisconnectDrillDownLoader: false,
  ChangeOrdersDrillDownLoader: false,
  OverallTrendDrillDownLoader: false,
  DisputableCircuitsDrillDownLoader: false,
  NewInstallOrderGraph: false,
  ChangeOrderGraph: false,
  DisputeRaisedGraph: false,
  DisconnectGraph: false,
  DisconnectOrderDrillDownLoader: false,
  ChangeOrderDrillDownLoader: false,
  NewInstallDrillDownLoader: false,
  DisputeRaisedDownLoader: false,
  InvoiceDrillDownLoader: false,
  OpenLoseTableLoader: false,
  DisputableCircuitsTableLoader: true,
  DisconnectOrdersLoader: false,
  ChangeOrdersOrderLoader: false,
  TopCircuitsLoader: false,
  InstallOrdersIn30Days: false,
  InstallOrdersByBW: false,
  InstallOrdersByTerm: false,
  // disputeNo: false,
  disputeamount: false,
  disputetype: false,
  invoicechart: false,
  circuit: false,
  circuitamt: false,
  cardone: false,
  cardtwo: false,
  cardthree: false,
  cardfour: false,
  cardfive: false,
  cardsix: false,
};

// OVerview Page

export const DirectLineController = (state = states, action) => {
  switch (action.type) {
    case "DirectLineController":
      return { ...states, DirectLineController: action.payload };
    default:
      return state;
  }
};

export const ChatBotToggler = (state = states, action) => {
  switch (action.type) {
    case "ChatBotToggler":
      return { ...states, ChatBotToggler: action.payload };
    default:
      return state;
  }
};

export const OpenLoseDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "OpenLoseDrillDownLoader":
      return { ...states, OpenLoseDrillDownLoader: action.payload };
    default:
      return state;
  }
};

export const OpenLoseTableLoader = (state = states, action) => {
  switch (action.type) {
    case "OpenLoseTableLoader":
      return { ...states, OpenLoseTableLoader: action.payload };
    default:
      return state;
  }
};

export const InvoiceAmountDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "InvoiceAmountDrillDownLoader":
      return { ...states, InvoiceAmountDrillDownLoader: action.payload };
    default:
      return state;
  }
};

export const DisputableCircuitsDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "DisputableCircuitsDrillDownLoader":
      return { ...states, DisputableCircuitsDrillDownLoader: action.payload };
    default:
      return state;
  }
};

export const NewInstallOrderGraph = (state = states, action) => {
  switch (action.type) {
    case "NewInstallOrderGraph":
      return { ...states, NewInstallOrderGraph: action.payload };
    default:
      return state;
  }
};
export const ChangeOrderGraph = (state = states, action) => {
  switch (action.type) {
    case "ChangeOrderGraph":
      return { ...states, ChangeOrderGraph: action.payload };
    default:
      return state;
  }
};
export const DisputeRaisedGraph = (state = states, action) => {
  switch (action.type) {
    case "DisputeRaisedGraph":
      return { ...states, DisputeRaisedGraph: action.payload };
    default:
      return state;
  }
};

export const DisconnectGraph = (state = states, action) => {
  switch (action.type) {
    case "DisconnectGraph":
      return { ...states, DisconnectGraph: action.payload };
    default:
      return state;
  }
};

export const DisconnectOrderDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "DisconnectOrderDrillDownLoader":
      return { ...states, DisconnectOrderDrillDownLoader: action.payload };
    default:
      return state;
  }
};

export const ChangeOrderDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "ChangeOrderDrillDownLoader":
      return { ...states, ChangeOrderDrillDownLoader: action.payload };
    default:
      return state;
  }
};

export const NewInstallDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "NewInstallDrillDownLoader":
      return { ...states, NewInstallDrillDownLoader: action.payload };
    default:
      return state;
  }
};
export const DisputeRaisedDownLoader = (state = states, action) => {
  switch (action.type) {
    case "DisputeRaisedDownLoader":
      return { ...states, DisputeRaisedDownLoader: action.payload };
    default:
      return state;
  }
};
export const InvoiceDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "InvoiceDrillDownLoader":
      return { ...states, InvoiceDrillDownLoader: action.payload };
    default:
      return state;
  }
};

export const DisputableCircuitsTableLoader = (state = states, action) => {
  switch (action.type) {
    case "DisputableCircuitsTableLoader":
      return { ...states, DisputableCircuitsTableLoader: action.payload };
    default:
      return state;
  }
};
export const Invoicechartloader = (state = states, action) => {
  switch (action.type) {
    case "invoicechartloader":
      return { ...states, invoicechart: action.payload };
    default:
      return state;
  }
};
export const Circuitloader = (state = states, action) => {
  switch (action.type) {
    case "circuit":
      return { ...states, circuit: action.payload };
    default:
      return state;
  }
};
export const Circuitamtloader = (state = states, action) => {
  switch (action.type) {
    case "circuitamt":
      return { ...states, circuitamt: action.payload };
    default:
      return state;
  }
};
export const Cardoneloader = (state = states, action) => {
  switch (action.type) {
    case "cardone":
      return { ...states, cardone: action.payload };
    default:
      return state;
  }
};
export const Cardtwoloader = (state = states, action) => {
  switch (action.type) {
    case "cardtwo":
      return { ...state, cardtwo: action.payload };
    default:
      return state;
  }
};

export const Cardthreeloader = (state = states, action) => {
  switch (action.type) {
    case "cardthree":
      return { ...state, cardthree: action.payload };
    default:
      return state;
  }
};

export const Cardfourloader = (state = states, action) => {
  switch (action.type) {
    case "cardfour":
      return { ...state, cardfour: action.payload };
    default:
      return state;
  }
};

export const Cardfiveloader = (state = states, action) => {
  switch (action.type) {
    case "cardfive":
      return { ...state, cardfive: action.payload };
    default:
      return state;
  }
};

export const Cardsixloader = (state = states, action) => {
  switch (action.type) {
    case "cardsix":
      return { ...state, cardsix: action.payload };
    default:
      return state;
  }
};

// Dispute Page

export const DisputeTypeloader = (state = states, action) => {
  switch (action.type) {
    case "disputeType":
      return { ...state, disputetype: action.payload };
    default:
      return state;
  }
};

export const DisputeAmountloader = (state = states, action) => {
  switch (action.type) {
    case "disputeAmount":
      return { ...state, disputeamount: action.payload };
    default:
      return state;
  }
};

// export const NoOfDisputesloader = (state = states, action) => {
//   switch (action.type) {
//     case "disputeNo":
//       return { ...state, disputeNo: action.payload };
//     default:
//       return state;
//   }
// };

export const InstallOrdersByTerm = (state = states, action) => {
  switch (action.type) {
    case "InstallOrdersByTerm":
      return { ...state, InstallOrdersByTerm: action.payload };
    default:
      return state;
  }
};

export const InstallOrdersByBW = (state = states, action) => {
  switch (action.type) {
    case "InstallOrdersByBW":
      return { ...state, InstallOrdersByBW: action.payload };
    default:
      return state;
  }
};

export const InstallOrdersIn30Days = (state = states, action) => {
  switch (action.type) {
    case "InstallOrdersIn30Days":
      return { ...state, InstallOrdersIn30Days: action.payload };
    default:
      return state;
  }
};

export const TopCircuitsLoader = (state = states, action) => {
  switch (action.type) {
    case "TopCircuitsLoader":
      return { ...state, TopCircuitsLoader: action.payload };
    default:
      return state;
  }
};

export const ChangeOrdersOrderLoader = (state = states, action) => {
  switch (action.type) {
    case "ChangeOrdersOrderLoader":
      return { ...state, ChangeOrdersOrderLoader: action.payload };
    default:
      return state;
  }
};

export const DisconnectOrdersLoader = (state = states, action) => {
  switch (action.type) {
    case "DisconnectOrdersLoader":
      return { ...state, DisconnectOrdersLoader: action.payload };
    default:
      return state;
  }
};

export const DisconnectDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "DisconnectDrillDownLoader":
      return { ...states, DisconnectDrillDownLoader: action.payload };
    default:
      return state;
  }
};

export const ChangeOrdersDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "ChangeOrdersDrillDownLoader":
      return { ...states, ChangeOrdersDrillDownLoader: action.payload };
    default:
      return state;
  }
};

export const OverallTrendDrillDownLoader = (state = states, action) => {
  switch (action.type) {
    case "OverallTrendDrillDownLoader":
      return { ...states, OverallTrendDrillDownLoader: action.payload };
    default:
      return state;
  }
};
