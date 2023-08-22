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
  CREATE_SHOW_BEGIN,
  CREATE_SHOW_SUCCESS,
  CREATE_SHOW_ERROR,
  GET_SHOWS_BEGIN,
  GET_SHOWS_SUCCESS,
  SET_EDIT_SHOW,
  DELETE_SHOW_BEGIN,
  DELETE_SHOW_ERROR,
  EDIT_SHOW_BEGIN,
  EDIT_SHOW_SUCCESS,
  EDIT_SHOW_ERROR,
  CLEAR_VALUES,
  CLEAR_FILE_UPLOAD,
  SHOW_ALERT,
  HIDE_ALERT,
  CLEAR_FILTERS,
  CHANGE_PAGE,
  GET_PUBLISHED_SHOWS_BEGIN,
  GET_PUBLISHED_SHOWS_SUCCESS,
  GET_FEATURED_SHOWS_BEGIN,
  GET_FEATURED_SHOWS_SUCCESS,
  SHOW_OVERVIEW_BEGIN,
  SHOW_OVERVIEW_SUCCESS,
  GET_UPCOMING_SHOWS_BEGIN,
  GET_UPCOMING_SHOWS_SUCCESS,
  UPDATE_FAVORITE_BEGIN,
  UPDATE_FAVORITE_SUCCESS,
  UPDATE_FAVORITE_ERROR,
  GET_FAVORITES,
  GET_FAVORITE_SHOWS_BEGIN,
  GET_FAVORITE_SHOWS_SUCCESS,
} from "./actions";

import { initialState } from "./appContext";
import { parseISO } from "date-fns";

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
  if (action.type === SHOW_ALERT) {
    return {
      ...state,
      // showMessage: true,
      showAlert: true,
      messageText: "Please provide all values!",
      messageType: "error",
    };
  }
  if (action.type === HIDE_ALERT) {
    return {
      ...state,
      showMessage: false,
      showAlert: false,
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
      role: action.payload.role,
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
      page: 1,
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
  if (action.type === UPLOAD_IMAGE_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === UPLOAD_IMAGE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      [action.payload.imageType]: action.payload.src,
    };
  }
  if (action.type === UPLOAD_IMAGE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      messageText: action.payload.msg,
      messageType: "error",
    };
  }
  if (action.type === CREATE_SHOW_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === CREATE_SHOW_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      messageText: "Success, new show created!",
      messageType: "success",
    };
  }
  if (action.type === CREATE_SHOW_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      messageText: action.payload.msg,
      messageType: "error",
    };
  }
  if (action.type === GET_SHOWS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      isEditing: false,
      showMessage: false,
      showAlert: false,
    };
  }
  if (action.type === GET_SHOWS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      shows: action.payload.shows,
      totalShows: action.payload.totalShows,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === SET_EDIT_SHOW) {
    const show = state.shows.find((show) => show._id === action.payload.id);
    const {
      _id,
      artist,
      artistInfo,
      artistImage,
      featureImage,
      isPublished,
      isFeatured,
      performDateTime,
      status,
      ticketsPrice,
    } = show;
    const parsedPerformDateTime = parseISO(performDateTime);
    return {
      ...state,
      isEditing: true,
      editShowId: _id,
      artist,
      artistInfo,
      artistImage,
      featureImage,
      published: isPublished,
      isPublished,
      featured: isFeatured,
      isFeatured,
      performDate: parsedPerformDateTime,
      performTime: parsedPerformDateTime,
      performDateTime: parsedPerformDateTime,
      status,
      ticketsPrice,
      ticketPrice: ticketsPrice,
    };
  }
  if (action.type === DELETE_SHOW_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === DELETE_SHOW_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      messageText: action.payload.msg,
      messageType: "error",
    };
  }
  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editShowId: "",
      artist: "",
      artistInfo: "",
      ticketPrice: "",
      performDate: "",
      performTime: "",
      performDateTime: "",
      artistImage:
        "https://res.cloudinary.com/dnc7potxo/image/upload/v1686913117/the-bloc-camp/artist-image/tmp-1-1686913115687_fad0kg.png",
      featureImage:
        "https://res.cloudinary.com/dnc7potxo/image/upload/v1686927431/the-bloc-camp/feature-image/tmp-1-1686927429423_xgrkwk.png",
      published: false,
      featured: false,
      status: "",
    };
    return {
      ...state,
      ...initialState,
    };
  }
  if (action.type === EDIT_SHOW_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === EDIT_SHOW_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isEditing: false,
      showAlert: true,
      messageText: `${action.payload.artist} show has been updated!`,
      messageType: "success",
    };
  }
  if (action.type === EDIT_SHOW_ERROR) {
    return {
      ...state,
      isLoading: false,
      // isEditing: false,
      showAlert: true,
      messageText: action.payload.msg,
      messageType: "error",
    };
  }
  if (action.type === CLEAR_FILE_UPLOAD) {
    return {
      ...state,
      artistImage: "",
      featureImage: "",
    };
  }
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      search: "",
      searchStatus: "all",
      sort: "by date",
    };
  }
  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      page: action.payload.page,
    };
  }
  if (action.type === GET_PUBLISHED_SHOWS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_PUBLISHED_SHOWS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      shows: action.payload.shows,
      totalShows: action.payload.totalShows,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === GET_FEATURED_SHOWS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_FEATURED_SHOWS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      featuredShows: action.payload.shows,
    };
  }
  if (action.type === SHOW_OVERVIEW_BEGIN) {
    return {
      ...state,
      isLoading: true,
      isEditing: false,
      showAlert: false,
    };
  }
  if (action.type === SHOW_OVERVIEW_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      overview: action.payload.overview,
      monthlyApplication: action.payload.monthlyApplication,
    };
  }
  if (action.type === GET_UPCOMING_SHOWS_BEGIN) {
    return {
      ...state,
      isLoading: true,
      isEditing: false,
      showMessage: false,
      showAlert: false,
    };
  }
  if (action.type === GET_UPCOMING_SHOWS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      shows: action.payload.shows,
      totalShows: action.payload.totalShows,
      numOfPages: action.payload.numOfPages,
    };
  }
  if (action.type === UPDATE_FAVORITE_BEGIN) {
    return {
      ...state,
      isProcessing: true,
    };
  }
  if (action.type === UPDATE_FAVORITE_SUCCESS) {
    return {
      ...state,
      isProcessing: false,
      user: action.payload.user,
      favorites: action.payload.favorites,
    };
  }
  if (action.type === UPDATE_FAVORITE_ERROR) {
    return {
      ...state,
      isProcessing: false,
      showAlert: true,
      messageText: action.payload.msg,
      messageType: "error",
    };
  }
  if (action.type === GET_FAVORITES) {
    return {
      ...state,
      favorites: action.payload.favorites,
    };
  }
  if (action.type === GET_FAVORITE_SHOWS_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }
  if (action.type === GET_FAVORITE_SHOWS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      shows: action.payload.shows,
      totalShows: action.payload.totalShows,
      numOfPages: action.payload.numOfPages,
    };
  }
  throw new Error(`No such action: ${action.type}`);
};
export default reducer;
