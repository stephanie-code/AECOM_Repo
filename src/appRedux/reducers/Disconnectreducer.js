export const Disconnectreducer = (state = [], action) => {
    switch (action.type) {
      case "DISCONNECT":
        
        return action.payload;
      default:
        return state;
    }
  };

  