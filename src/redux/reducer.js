export function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT": {
      const copy = { ...state };
      copy.count = copy.count + 1;
      return copy;
    }

    case "DECREMENT": {
      const copy = { ...state };
      copy.count = copy.count + 1;
      return copy;
    }

    default:
      return state;
  }
}

console.log(reducer());
