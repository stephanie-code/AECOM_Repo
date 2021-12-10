import axios from "axios";

export const Disconnect = () => {
  return async function (dispatch, getState) {
    try {
      let xval = [];
      let yval = [];
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Disconnect/GetDisconnectOrdersByDate?month=04&year=2021`
      );
      const result = JSON.parse(response.data);
      for (var key in result.Table) {
        const y = result.Table[key].DISCONNECT_ORDERS;
        const x = result.Table[key].ASR_SENT_DT;
        yval.push(y);
        xval.push(x);
      }
      dispatch({
        type: "DISCONNECT",
        payload: {
          x: xval,
          y: yval,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
