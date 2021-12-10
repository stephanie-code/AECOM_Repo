const states = {
    Keyword: ''
  };
  
  export const TweetKeywordReducer = (state = states, action) => {
    switch (action.type) {
      case "Keyword":
        return { ...state, Keyword: action.payload };
      default:
        return state;
    }
  };