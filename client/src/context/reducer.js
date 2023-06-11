import {
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  REGISTER_BEGIN,
  REGISTER_ERROR,
  REGISTER_SUCCESS,
  LOGIN_BEGIN,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  TOGGLE_SIDEBAR,
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
  if (action.type === REGISTER_SUCCESS) {
    return {
      ...state,
      showMessage: true,
      messageText: "Your account has been created! Redirecting...",
      messageType: "success",
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
    };
  }
  if (action.type === REGISTER_ERROR) {
    return {
      ...state,
      showMessage: true,
      messageText: action.payload.msg,
      messageType: "error",
      isLoading: false,
    };
  }
  if (action.type === LOGIN_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      showMessage: true,
      messageText: "Login Successful! Redirecting...",
      messageType: "success",
      isLoading: false,
      user: action.payload.user,
      token: action.payload.token,
      role: action.payload.role,
    };
  }
  if (action.type === LOGIN_ERROR) {
    return {
      ...state,
      showMessage: true,
      messageText: action.payload.msg,
      messageType: "error",
      isLoading: false,
    };
  }
  throw new Error(`No such action: ${action.type}`);
};
export default reducer;
