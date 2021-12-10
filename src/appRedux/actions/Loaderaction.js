// Overview

export const ChatBotToggler = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "ChatBotToggler",
      payload: data,
    });
  };
};

export const DirectLineController = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "DirectLineController",
      payload: data,
    });
  };
};

export const OpenLoseDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "OpenLoseDrillDownLoader",
      payload: data,
    });
  };
};

export const InvoiceAmountDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "InvoiceAmountDrillDownLoader",
      payload: data,
    });
  };
};

export const DisputableCircuitsDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "DisputableCircuitsDrillDownLoader",
      payload: data,
    });
  };
};

export const DisputeRaisedGraph = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "DisputeRaisedGraph",
      payload: data,
    });
  };
};

export const NewInstallOrderGraph = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "NewInstallOrderGraph",
      payload: data,
    });
  };
};

export const ChangeOrderGraph = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "ChangeOrderGraph",
      payload: data,
    });
  };
};

export const DisconnectGraph = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "DisconnectGraph",
      payload: data,
    });
  };
};

export const DisconnectOrderDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "DisconnectOrderDrillDownLoader",
      payload: data,
    });
  };
};

export const ChangeOrderDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "ChangeOrderDrillDownLoader",
      payload: data,
    });
  };
};

export const NewInstallDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "NewInstallDrillDownLoader",
      payload: data,
    });
  };
};

export const DisputeRaisedDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "DisputeRaisedDownLoader",
      payload: data,
    });
  };
};

export const InvoiceDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "InvoiceDrillDownLoader",
      payload: data,
    });
  };
};

export const DisputableCircuitsTableLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "DisputableCircuitsTableLoader",
      payload: data,
    });
  };
};
export const OpenLoseTableLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "OpenLoseTableLoader",
      payload: data,
    });
  };
};
export const circuitloader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "circuit",
      payload: data,
    });
  };
};

export const invoicechartloader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "invoicechartloader",
      payload: data,
    });
  };
};

export const cirucuitamtloader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "circuitamt",
      payload: data,
    });
  };
};
export const card1loader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "cardone",
      payload: data,
    });
  };
};
export const card2loader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "cardtwo",
      payload: data,
    });
  };
};

export const card3loader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "cardthree",
      payload: data,
    });
  };
};

export const card4loader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "cardfour",
      payload: data,
    });
  };
};

export const card5loader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "cardfive",
      payload: data,
    });
  };
};

export const card6loader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "cardsix",
      payload: data,
    });
  };
};

// dispute Page

export const DisputeType = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "disputeType",
      payload: data,
    });
  };
};

// export const NoOfDisputes = (data) => {
//   return function (dispatch, getState) {
//     dispatch({
//       type: "disputeNo",
//       payload: data,
//     });
//   };
// };

export const DisputeAmount = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "disputeAmount",
      payload: data,
    });
  };
};

// Orders Page

export const OverallTrendDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "OverallTrendDrillDownLoader",
      payload: data,
    });
  };
};

export const ChangeOrdersDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "ChangeOrdersDrillDownLoader",
      payload: data,
    });
  };
};

export const DisconnectDrillDownLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "DisconnectDrillDownLoader",
      payload: data,
    });
  };
};

export const InstallOrdersByTermLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "InstallOrdersByTerm",
      payload: data,
    });
  };
};

export const InstallOrdersByBWLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "InstallOrdersByBW",
      payload: data,
    });
  };
};

export const InstallOrdersIn30Days = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "InstallOrdersIn30Days",
      payload: data,
    });
  };
};

export const ChangeOrdersOrderLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "ChangeOrdersOrderLoader",
      payload: data,
    });
  };
};

export const TopCircuitsLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "TopCircuitsLoader",
      payload: data,
    });
  };
};

export const DisconnectOrdersLoader = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "DisconnectOrdersLoader",
      payload: data,
    });
  };
};
