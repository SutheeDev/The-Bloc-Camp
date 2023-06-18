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
  LOGOUT_USER,
  HANDLE_CHANGE,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  UPLOAD_IMAGE_BEGIN,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_ERROR,
} from "./actions";

import { initialState } from "./appContext";

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
  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }
  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      role: "",
    };
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }
  if (action.type === UPDATE_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showMessage: true,
      messageText: "user profile updated!",
      messageType: "success",
      user: action.payload.user,
      token: action.payload.token,
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showMessage: true,
      messageText: action.payload.msg,
      messageType: "error",
    };
  }
  throw new Error(`No such action: ${action.type}`);
};
export default reducer;
