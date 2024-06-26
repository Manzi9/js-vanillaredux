export function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      const copy = { ...state };
      copy.count = copy.count + 1;

    default:
      return state;
  }
}
