export const TweetKeyword = (keyword) => {
    return async function (dispatch) {
      dispatch({
        type: "Keyword",
        payload: keyword,
      });
    };
  };