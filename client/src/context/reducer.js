import { SHOW_MESSAGE } from "./actions";

const reducer = (state, action) => {
  if (action.type === SHOW_MESSAGE) {
    return {
      ...state,
      showMessage: true,
      messageText: "Please provide all values!",
      messageType: "error",
    };
  }
  throw new Error(`No such action: ${action.type}`);
};
export default reducer;
