export const Disputewinreducer = (state = [], action) => {
  switch (action.type) {
    case "WINREDUCER":
      return action.payload;
    default:
      return state;
  }
};

export const Winamtreducer = (state = [], action) => {
  switch (action.type) {
    case "WINAMT":
      return action.payload;
    default:
      return state;
  }
};

export const Disputelostreducer = (state = [], action) => {
  switch (action.type) {
    case "LOSTREDUCER":
      return action.payload;
    default:
      return state;
  }
};

export const Lostamtreducer = (state = [], action) => {
  switch (action.type) {
    case "LOSTAMT":
      return action.payload;
    default:
      return state;
  }
};

export const Unresolvedreducer = (state = [], action) => {
  switch (action.type) {
    case "UNRESOLVED":
      return action.payload;
    default:
      return state;
  }
};

export const Unresolvedamtreducer = (state = [], action) => {
  switch (action.type) {
    case "UNRESOLVEDAMT":
      return action.payload;
    default:
      return state;
  }
};

export const Winpercentage = (state = [], action) => {
  switch (action.type) {
    case "WIN_PERCENT":
      return action.payload;
    default:
      return state;
  }
};

export const Losspercentage = (state = [], action) => {
  switch (action.type) {
    case "LOSS_PERCENT":
      return action.payload;
    default:
      return state;
  }
};

export const Unresolvedpercentage = (state = [], action) => {
  switch (action.type) {
    case "UNRESOLVED_PERCENT":
      return action.payload;
    default:
      return state;
  }
};

export const Circuitsreducer = (state = [], action) => {
  switch (action.type) {
    case "CIRCUITS":
      return action.payload;
    default:
      return state;
  }
};
// export const Circuitsamtreducer = (state = [], action) => {
//   switch (action.type) {
//     case "CIRCUITSAMT":
//       return action.payload;
//     default:
//       return state;
//   }
// };
