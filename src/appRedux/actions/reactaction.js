//import "./value.json";
import axios from "axios";
// export const reactTable = () => {
//   return async function (dispatch, getState) {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch({
//       type: "REACT_TABLE",
//       payload: response.data,
//     });
//   };
// };
export const cardOne = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/InvoicesBilledPast30Days?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "CARD_ONE",
        payload: JSON.parse(response.data).Table[0].NO_OF_INVOICES,
      });
      dispatch({
        type: "cardone",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cardTwo = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/CircuitsBilledPast30Days?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "CARD_TWO",
        payload: JSON.parse(response.data).Table[0].NO_OF_CIRCUITS,
      });
      dispatch({
        type: "cardtwo",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cardThree = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisputesRaisedPast30Days?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "CARD_THREE",
        payload: JSON.parse(response.data).Table[0].DISPUTES_RAISED,
      });
      dispatch({
        type: "cardthree",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cardFour = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/InstallOrdersPast30Days?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "CARD_FOUR",
        payload: JSON.parse(response.data).Table[0].NEW_INSTALL_ORDERS,
      });
      dispatch({
        type: "cardfour",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cardFive = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/ChangeOrdersPast30Days?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "CARD_FIVE",
        payload: JSON.parse(response.data).Table[0].CHANGE_ORDERS,
      });
      dispatch({
        type: "cardfive",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const cardSix = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisconnectOrdersPast30Days?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "CARD_SIX",
        payload: JSON.parse(response.data).Table[0].DISCONNECT_ORDERS,
      });
      dispatch({
        type: "cardsix",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// export const cardOne = () => {
//   const res = 1111;
//   return {
//     type: "CARD_ONE",
//     //pass song as parameter--to know what song we r going ti select
//     payload: res,
//   };
// };

export const Disputeraised = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisputesRaisedPercentage?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "RAISED",
        payload: JSON.parse(response.data).Table[0].DISPUTE_RAISED_PERCENTAGE,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Neworders = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/InstallOrdersPercentage?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "NEW_ORDERS",
        payload: JSON.parse(response.data).Table[0].INSTALL_ORDERS_PERCENTAGE,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Changeorders = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/ChangeOrdersPercentage?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "CHANGE",
        payload: JSON.parse(response.data).Table[0].CHANGE_ORDERS_PERCENTAGE,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Disconnectorders = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisconnectOrdersPercentage?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "DISCONNECT",
        payload: JSON.parse(response.data).Table[0]
          .DISCONNECT_ORDERS_PERCENTAGE,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
