import { SHOW_MESSAGE } from "./actions";

const reducer = (state, action) => {
  if (action.type === "SHOW_MESSAGE") {
    return {
      ...state,
      showMessage: true,
      messageText: "error",
      messageType: "Please provide all values!",
    };
  }
  throw new Error(`No such action: ${action.type}`);
};
export default reducer;
