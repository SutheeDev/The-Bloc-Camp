import {
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  REGISTER_BEGIN,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === SHOW_MESSAGE) {
    return {
      ...state,
      showMessage: true,
      messageText: "Please provide all values!",
      messageType: "error",
    };
  }
  if (action.type === HIDE_MESSAGE) {
    return {
      ...state,
      showMessage: false,
      messageText: "",
      messageType: "",
    };
  }
  if (action.type === REGISTER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  throw new Error(`No such action: ${action.type}`);
};
export default reducer;