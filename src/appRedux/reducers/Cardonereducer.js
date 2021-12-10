export const Cardonereducer = (state = [], action) => {
  switch (action.type) {
    case "CARD_ONE":
      return action.payload;
    default:
      return state;
  }
};

export const Cardtworeducer = (state = [], action) => {
  switch (action.type) {
    case "CARD_TWO":
      return action.payload;
    default:
      return state;
  }
};

export const Cardthreereducer = (state = [], action) => {
  switch (action.type) {
    case "CARD_THREE":
      return action.payload;
    default:
      return state;
  }
};

export const Cardfourreducer = (state = [], action) => {
  switch (action.type) {
    case "CARD_FOUR":
      return action.payload;
    default:
      return state;
  }
};

export const Cardfivereducer = (state = [], action) => {
  switch (action.type) {
    case "CARD_FIVE":
      return action.payload;
    default:
      return state;
  }
};

export const Cardsixreducer = (state = [], action) => {
  switch (action.type) {
    case "CARD_SIX":
      return action.payload;
    default:
      return state;
  }
};

export const Raisedreducer = (state = [], action) => {
  switch (action.type) {
    case "RAISED":
      return action.payload;
    default:
      return state;
  }
};
export const Newinstallreducer = (state = [], action) => {
  switch (action.type) {
    case "NEW_ORDERS":
      return action.payload;
    default:
      return state;
  }
};
export const Changeordersreducer = (state = [], action) => {
  switch (action.type) {
    case "CHANGE":
      return action.payload;
    default:
      return state;
  }
};
export const Disconnectordersreducer = (state = [], action) => {
  switch (action.type) {
    case "DISCONNECT":
      return action.payload;
    default:
      return state;
  }
};
