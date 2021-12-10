const states = {
  District_Name: '',
  District_Data: '',
  District_Data_One: '',
};

export const DistrictSelectReducer = (state = states, action) => {
  switch (action.type) {
    case "DISTRICT_NAME":
      return { ...state, District_Name: action.payload };
    case "DISTRICT_DATA":
      return { ...state, District_Data: action.payload };
    default:
      return state;
  }
};
