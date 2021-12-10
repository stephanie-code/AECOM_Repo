export const DistrictSelected = (districtData) => {
  return async function (dispatch) {
    dispatch({
      type: "DISTRICT_DATA",
      payload: districtData,
    });
  };
};
