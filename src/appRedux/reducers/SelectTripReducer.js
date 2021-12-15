const states = {
  Trip_Type: ''
};

export const SelectTripReducer = (state = states, action) => {
  switch (action.type) {
    case "TRIP_TYPE":
      return { ...state, Trip_Type: action.payload };
    default:
      return state;
  }
};
