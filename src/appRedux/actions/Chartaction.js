import axios from "axios";

export const Winchartaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const xvaluefn = [];
      const yvaluefn = [];
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Dispute/LossDisputesPast6MonthByMonthwise?strUltimateSupplierName=${Supplier}`
      );
      const result = JSON.parse(response.data);
      for (var key in result.Table) {
        const y = result.Table[key].WIN_DISPUTES;
        const x = result.Table[key].DISPUTE_FILED_DT;
        xvaluefn.push(x);
        yvaluefn.push(y);
      }
      const chartData = [];
      for (let i = 0; i < xvaluefn.length; i++) {
        const newRow = {};
        newRow.name = xvaluefn[i];
        newRow.Win_Disputes = yvaluefn[i];
        chartData.push(newRow);
      }

      dispatch({
        type: "WINCHARTD",
        payload: chartData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//v
export const Losschartaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const xvaluefn = [];
      const yvaluefn = [];
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Dispute/LossDisputesPast6MonthByMonthwise?strUltimateSupplierName=${Supplier}`
      );
      const result = JSON.parse(response.data);
      for (var key in result.Table) {
        const y = result.Table[key].LOSS_DISPUTES;
        const x = result.Table[key].DISPUTE_FILED_DT;
        xvaluefn.push(x);
        yvaluefn.push(y);
      }
      const chartData = [];
      for (let i = 0; i < xvaluefn.length; i++) {
        const newRow = {};
        newRow.name = xvaluefn[i];
        newRow.Loss_disputes = yvaluefn[i];
        chartData.push(newRow);
      }

      dispatch({
        type: "LOSSCHARTD",
        payload: chartData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//v
export const Unresolvedchartaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const xvaluefn = [];
      const yvaluefn = [];
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Dispute/UnresolvedDisputesPast6MonthsByMonthwise?strUltimateSupplierName=${Supplier}`
      );
      const result = JSON.parse(response.data);
      for (var key in result.Table) {
        const y = result.Table[key].UNRESOLVED_DISPUTES;
        const x = result.Table[key].DISPUTE_FILED_DT;
        xvaluefn.push(x);
        yvaluefn.push(y);
      }
      const chartData = [];
      for (let i = 0; i < xvaluefn.length; i++) {
        const newRow = {};
        newRow.name = xvaluefn[i];
        newRow.Unresolved_disputes = yvaluefn[i];
        chartData.push(newRow);
      }
      dispatch({
        type: "UNRESOLVEDCHARTD",
        payload: chartData,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Raisedchartaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const xvaluefn = [];
      const yvaluefn = [];
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisputesRaisedPast6MonthsByMonthwise?strUltimateSupplierName=${Supplier}`
      );
      const result = JSON.parse(response.data);
      for (var key in result.Table) {
        const y = result.Table[key].DISPUTES_RAISED;
        const x = result.Table[key].DISPUTE_FILED_DT;
        xvaluefn.push(x);
        yvaluefn.push(y);
      }
      const chartData = [];
      for (let i = 0; i < xvaluefn.length; i++) {
        const newRow = {};
        newRow.name = xvaluefn[i];
        newRow.Disputes_raised = yvaluefn[i];
        chartData.push(newRow);
      }

      dispatch({
        type: "RAISEDCHARTDS",
        payload: chartData,
      });
      dispatch({
        type: "DisputeRaisedGraph",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const Newinstallchartaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const xvaluefn = [];
      const yvaluefn = [];
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/InstallOrdersPast6MonthsByMonthwise?strUltimateSupplierName=${Supplier}`
      );
      const result = JSON.parse(response.data);
      for (var key in result.Table) {
        const y = result.Table[key].NEW_INSTALL_ORDERS;
        const x = result.Table[key].ASR_SENT_DT;
        xvaluefn.push(x);
        yvaluefn.push(y);
      }
      const chartData = [];
      for (let i = 0; i < xvaluefn.length; i++) {
        const newRow = {};
        newRow.name = xvaluefn[i];
        newRow.New_install_orders = yvaluefn[i];
        chartData.push(newRow);
      }

      dispatch({
        type: "NEWINSTALLCHARTD",
        payload: chartData,
      });
      dispatch({
        type: "NewInstallOrderGraph",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//v
export const Changechartaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const xvaluefn = [];
      const yvaluefn = [];
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/ChangeOrdersPast6MonthsByMonthwise?strUltimateSupplierName=${Supplier}`
      );
      const result = JSON.parse(response.data);
      for (var key in result.Table) {
        const y = result.Table[key].CHANGE_ORDERS;
        const x = result.Table[key].ASR_SENT_DT;
        xvaluefn.push(x);
        yvaluefn.push(y);
      }
      const chartData = [];
      for (let i = 0; i < xvaluefn.length; i++) {
        const newRow = {};
        newRow.name = xvaluefn[i];
        newRow.Change_orders = yvaluefn[i];
        chartData.push(newRow);
      }

      dispatch({
        type: "CHANGECHARTD",
        payload: chartData,
      });
      dispatch({
        type: "ChangeOrderGraph",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//d
export const Disconnectchartaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const xvaluefn = [];
      const yvaluefn = [];
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisconnectOrdersPast6MonthsByMonthwise?strUltimateSupplierName=${Supplier}`
      );
      const result = JSON.parse(response.data);
      for (var key in result.Table) {
        const y = result.Table[key].DISCONNECT_ORDERS;
        const x = result.Table[key].ASR_SENT_DT;
        xvaluefn.push(x);
        yvaluefn.push(y);
      }
      const chartData = [];
      for (let i = 0; i < xvaluefn.length; i++) {
        const newRow = {};
        newRow.name = xvaluefn[i];
        newRow.Disconnect_orders = yvaluefn[i];
        chartData.push(newRow);
      }

      dispatch({
        type: "DISCONNECTCHARTD",
        payload: chartData,
      });
      dispatch({
        type: "DisconnectGraph",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//no
export const Invoicechartaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const xvaluefn = [];
      const yvaluefn = [];
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/InvoicesBilledPast6MonthsByMonthwise?strUltimateSupplierName=${Supplier}`
      );
      const result = JSON.parse(response.data);

      for (var key in result.Table) {
        const y = result.Table[key].INVOICE_AMT;
        const x = result.Table[key].SUPPLIER_INVOICE_DT;
        xvaluefn.push(x);
        yvaluefn.push(y);
      }
      const chartData = [];
      for (let i = 0; i < xvaluefn.length; i++) {
        const newRow = {};
        newRow.name = xvaluefn[i];
        newRow.Dispute_amount_raised = yvaluefn[i];
        chartData.push(newRow);
      }

      dispatch({
        type: "INVOICECHARTD",
        payload: chartData,
      });
      dispatch({
        type: "invoicechartloader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//v
export const Disputechartaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Dispute/DisputeMetrics6Months?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "DISPUTECHARTD",
        payload: JSON.parse(response.data),
      });
      dispatch({
        type: "disputeAmount",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const NavbarOptions = (data) => {
  return function (dispatch, getState) {
    dispatch({
      type: "Supplier",
      payload: data,
    });
  };
};

//v
// export const Indispchartaction = (Supplier) => {
//   return async function (dispatch, getState) {
//     try {
//       const response = await axios.get(
//         `https://api-idadev.azurewebsites.net/api/Dispute/DisputeMetrics6Months?strUltimateSupplierName=${Supplier}`
//       );
//       console.log(response.data);

//       dispatch({
//         type: "INDISPCHARTD",
//         payload: JSON.parse(response.data),
//       });
//       dispatch({
//         type: "disputeNo",
//         payload: false,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

//v
export const InstallOrdersByBWaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Install/InstallOrdersByBw?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "ORDERBYBW",
        payload: JSON.parse(response.data),
      });
      dispatch({
        type: "InstallOrdersByBW",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// dafdf
export const InstallOrdersByTermaction = (Suppliers) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Install/InstallOrdersByterm?strUltimateSupplierName=${Suppliers}`
      );

      dispatch({
        type: "ORDERBYTERM",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "InstallOrdersByTerm",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//v
export const InstallOrdersByOverallaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Install/InstallOrdersByDate?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "OVERALL",
        payload: JSON.parse(response.data),
      });
      dispatch({
        type: "InstallOrdersIn30Days",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//v
export const ChangeOrdersByDateaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Change/ChangeOrdersBydate?strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "ORDERBYDATE",
        payload: JSON.parse(response.data),
      });
      dispatch({
        type: "ChangeOrdersOrderLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//v
export const DisconnectOrdersaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Disconnect/DisconnectOrdersByDate?strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "DISCONNECTORDER",
        payload: JSON.parse(response.data),
      });
      dispatch({
        type: "DisconnectOrdersLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//v
export const TopCircuitsWithChangesaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Change/TopCircuitsWithChanges?strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "TOPCIRCUITS",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "TopCircuitsLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//3!
export const DisputeByCategoryaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Dispute/DisputesCategoriesWisePast6Months?strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "disputeType",
        payload: false,
      });
      dispatch({
        type: "BYCATEGORY",
        payload: JSON.parse(response.data).Table,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//2
export const InvoiceDrilldownaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/InvoiceBilledPast30DaysDrillDown?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "InvoiceDrillDownLoader",
        payload: false,
      });

      dispatch({
        type: "INVDRILL",
        payload: JSON.parse(response.data).Table,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//1
export const DisputesDrillDownaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisputesRaisedPast30DaysDrillDown?strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "DISPUTESDRILL",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "DisputeRaisedDownLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// d
export const InstallOrdersDrillDownaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/InstallOrdersPast30DaysDrillDown?strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "INSTALLDRILL",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "NewInstallDrillDownLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

// d
export const ChangeOrdersdrilldownaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/ChangeOrdersPast30DaysDrilldown?strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "CHANGEDRILL",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "ChangeOrderDrillDownLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// d
export const DisconnectOrdersDrillDownaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisconnectOrdersPast30DaysDrillDown?strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "DISCONNECTDRILL",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "DisconnectOrderDrillDownLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//1
export const DisputableCircuitsTableaction = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/DisputableCircuitsTable?strUltimateSupplierName=${Supplier}`
      );

      dispatch({
        type: "DISPUTABLECIRCUITS",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "DisputableCircuitsTableLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// n
export const Amendenturlaction = (amnurl) => {
  // https://api-idadev.azurewebsites.net/api/Home/Contracts?strURL=https://dlsidadev.blob.core.windows.net/comcast/CTL/Amendment%2015.pdf

  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/Contracts?strURL=${amnurl}`
      );
      dispatch({
        type: "AMENDENTURL",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// d
export const DisconnectOrdersViewDrilldown = (getDate, Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Disconnect/DisconnectOrdersDrillDownByDate?strAsrSentDate=${getDate}&strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "DISCONNECTDRILLDOWN",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "DisconnectDrillDownLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
// d
export const InstallOrdersViewDrilldown = (getDate, Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Install/InstallOrdersDrillDownByDate?strAsrSentDate=${getDate}&strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "INSTALLDRILLDOWN",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "OverallTrendDrillDownLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
//d
export const ChangeOrdersDrillDownByDate = (getDate, Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Change/ChangeOrdersDrillDownByDate?strAsrSentDate=${getDate}&strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "CHANGEORDERSBYDATEDRILLDOWN",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "ChangeOrdersDrillDownLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const invoiceNumberaction = (invoiceNum, invoiceDate) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/InvoicesDrillDownForInvoiceNumber?strSupplierInvoiceNumber=${invoiceNum}&strSupplierInvoiceDate=${invoiceDate}`
      );
      dispatch({
        type: "INVOICENUMBER",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "DisputableCircuitsDrillDownLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//done
export const SuppliersListaction = () => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/SuppliersList`
      );
      dispatch({
        type: "Supplier_List",
        payload: JSON.parse(response.data).Table,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//done
export const OpenLoseDisputesTable = (Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        "https://api-idadev.azurewebsites.net/api/Home/OpenLossDisputesTable"
      );
      dispatch({
        type: "OPENLOSEDISPUTES",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "OpenLoseTableLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const InvoicesDrillDownForMonth = (activeLabel, Supplier) => {
  return async function (dispatch, getState) {
    try {
      const response = await axios.get(
        `https://api-idadev.azurewebsites.net/api/Home/InvoicesDrillDownForMonth?strDate=${activeLabel}&strUltimateSupplierName=${Supplier}`
      );
      dispatch({
        type: "INVOICEDRILLDOWN",
        payload: JSON.parse(response.data).Table,
      });
      dispatch({
        type: "InvoiceAmountDrillDownLoader",
        payload: false,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
