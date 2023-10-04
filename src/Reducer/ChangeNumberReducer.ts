let initial = 0;
const ChangeNumber = (state: number = initial, action: any) => {
  switch (action.type) {
    case "Increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default ChangeNumber;
