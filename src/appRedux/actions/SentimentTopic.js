export const SentimentTopic = (topic_number) => {
  return async function (dispatch) {
    dispatch({
      type: "TOPIC",
      payload: topic_number,
    });
  };
};

export const Sentiment = (sentiment) => {
  return async function (dispatch) {
    dispatch({
      type: "SENTIMENT",
      payload: sentiment,
    });
  };
};
