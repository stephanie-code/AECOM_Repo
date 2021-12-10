const states = {
  Topic_Number: '',
  Sentiment: ''
};

export const SentimentTopicReducer = (state = states, action) => {
  switch (action.type) {
    case "TOPIC":
      return { ...state, Topic_Number: action.payload };
    case "SENTIMENT":
      return { ...state, Sentiment: action.payload };
    default:
      return state;
  }
};

// export const SentimentReducer = (state = states, action) => {
//   console.log('redu', action)
//   switch (action.type) {
//     case "SENTIMENT":
//       return { ...state, Sentiment: action.payload };
//     default:
//       return state;
//   }
// };