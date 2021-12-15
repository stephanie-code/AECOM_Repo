export const SelectTrip = (type) => {
    return async function (dispatch) {
        dispatch({
            type: "TRIP_TYPE",
            payload: type,
        });
    };
};