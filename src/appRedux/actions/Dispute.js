import axios from "axios";

export const Win = (Supplier) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api-idadev.azurewebsites.net/api/Dispute/WinDisputesPast30Days?strUltimateSupplierName=${Supplier}`
    );
    const result = JSON.parse(response.data).Table[0].WIN_DISPUTES;
    const data = result ? result : null;

    dispatch({
      type: "WINREDUCER",
      payload: data,
    });
  };
};
export const Winamt = (Supplier) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api-idadev.azurewebsites.net/api/Dispute/WinDisputesPast30Days?strUltimateSupplierName=${Supplier}`
    );
    const result = JSON.parse(response.data).Table[0].WIN_AMT;
    const data = result ? result : null;

    dispatch({
      type: "WINAMT",
      payload: data,
    });
  };
};

export const Lost = (Supplier) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api-idadev.azurewebsites.net/api/Dispute/LossDisputesPast30Days?strUltimateSupplierName=${Supplier}`
    );
    const result = JSON.parse(response.data).Table[0].LOSS_DISPUTES;
    const data = result ? result : null;

    dispatch({
      type: "LOSTREDUCER",
      payload: data,
    });
  };
};
export const Lostamt = (Supplier) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api-idadev.azurewebsites.net/api/Dispute/LossDisputesPast30Days?strUltimateSupplierName=${Supplier}`
    );
    const result = JSON.parse(response.data).Table[0].LOSS_AMT;
    const data = result ? result : null;

    dispatch({
      type: "LOSTAMT",
      payload: data,
    });
  };
};

export const Unresolved = (Supplier) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api-idadev.azurewebsites.net/api/Dispute/UnresolvedDisputesPast30Days?strUltimateSupplierName=${Supplier}`
    );
    const result = JSON.parse(response.data).Table[0].UNRESOLVED_DISPUTES;
    const data = result ? result : null;

    dispatch({
      type: "UNRESOLVED",
      payload: data,
    });
  };
};
export const Unresolvedamt = (Supplier) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api-idadev.azurewebsites.net/api/Dispute/UnresolvedDisputesPast30Days?strUltimateSupplierName=${Supplier}`
    );
    const result = JSON.parse(response.data).Table[0].UNRESOLVED_AMT;
    const data = result ? result : null;

    dispatch({
      type: "UNRESOLVEDAMT",
      payload: data,
    });
  };
};

export const Winpercent = (Supplier) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api-idadev.azurewebsites.net/api/Dispute/WinDisputesPercentage?strUltimateSupplierName=${Supplier}`
    );
    const result = JSON.parse(response.data).Table[0].WIN_PERCENTAGE;
    const data = result ? result : null;

    dispatch({
      type: "WIN_PERCENT",
      payload: data,
    });
  };
};

export const Losspercent = (Supplier) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api-idadev.azurewebsites.net/api/Dispute/LossDisputesPercentage?strUltimateSupplierName=${Supplier}`
    );
    const result = JSON.parse(response.data).Table[0].LOSS_PERCENTAGE;
    const data = result ? result : null;

    dispatch({
      type: "LOSS_PERCENT",
      payload: data,
    });
  };
};

export const Unresolvedpercent = (Supplier) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api-idadev.azurewebsites.net/api/Dispute/UnresolvedPercentage?strUltimateSupplierName=${Supplier}`
    );
    const result = JSON.parse(response.data).Table[0].UNRESOLVED_PERCENTAGE;
    const data = result ? result : null;
    dispatch({
      type: "UNRESOLVED_PERCENT",
      payload: data,
    });
  };
};

export const Disputablecircuitsaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisputableCircuitsInfo?strUltimateSupplierName=${Supplier}`
      );
      const result = JSON.parse(response.data).Table[0].NO_OF_CIRCUITS;
      const result1 = JSON.parse(response.data).Table[0].TOTAL_DISPUTE;
      const Output = {
        noOfCircuits: result,
        totalDispute: result1,
      };

      dispatch({
        type: "circuit",
        payload: false,
      });

      dispatch({
        type: "CIRCUITS",
        payload: Output,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const Disputablecircuitsamt = (Supplier) => {
//   return async function (dispatch, getState) {
//     const response = await axios.get(
//       `https://api-idadev.azurewebsites.net/api/Home/DisputableCircuitsInfo?strUltimateSupplierName=${Supplier}`
//     );
//     const result = JSON.parse(response.data).Table[0].TOTAL_DISPUTE;
//     const data = result ? result : null;
//     dispatch({
//       type: "circuitamt",
//       payload: false,
//     });

//     dispatch({
//       type: "CIRCUITSAMT",
//       payload: data,
//     });
//   };
// };
