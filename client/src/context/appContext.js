import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

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
  HIDE_ALERT,
  CLOSE_ALL_ALERT,
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
  GET_ARTIST_BEGIN,
  GET_ARTIST_SUCCESS,
  SEND_SUBSCRIBE_EMAIL_BEGIN,
  SEND_SUBSCRIBE_EMAIL_SUCCESS,
  SEND_SUBSCRIBE_EMAIL_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
} from "./actions";
import moment from "moment";

const storageShow = localStorage.getItem("show");

const initialState = {
  showMessage: false,
  showAlert: false,
  messageText: "",
  messageType: "",
  isLoading: false,
  user: null,
  role: "",
  showSidebar: false,

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
  statusOptions: ["upcoming", "canceled", "soldout"],

  shows: [],
  totalShows: 0,
  numOfPages: 1,
  page: 1,

  search: "",
  searchStatus: "all",
  sort: "by date",
  sortOptions: ["by date", "reverse date", "a-z", "z-a"],

  featuredShows: [],

  overview: {},
  monthlyApplication: [],

  favorites: [],
  isProcessing: false,

  show: JSON.parse(storageShow) || {},

  subscribeEmail: "",
  isSendingEmail: false,

  userLoading: true,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayMessage = () => {
    dispatch({ type: SHOW_MESSAGE });
    hideMessage();
  };

  const hideMessage = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_MESSAGE });
    }, 3000);
  };

  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 3000);
  };

  const closeAlertFromAnotherPage = () => {
    dispatch({ type: CLOSE_ALL_ALERT });
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_BEGIN });
    try {
      const response = await axios.post("api/v1/auth/register", currentUser);
      const { user } = response.data;
      dispatch({
        type: REGISTER_SUCCESS,
        payload: { user, role: user.role },
      });
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    hideMessage();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_BEGIN });
    try {
      const response = await axios.post("api/v1/auth/login", currentUser);
      const { user, role } = response.data;
      dispatch({ type: LOGIN_SUCCESS, payload: { user, role } });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    hideMessage();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const logoutUser = async () => {
    await authFetch.get("/auth/logout");
    dispatch({
      type: LOGOUT_USER,
    });
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateuser", currentUser);
      const { user, role } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: {
          user,
          role,
        },
      });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: {
            msg: error.response.data.msg,
          },
        });
      }
    }
    hideMessage();
  };

  const handleInputChange = ({ name, value }) => {
    dispatch({
      type: HANDLE_CHANGE,
      payload: {
        name,
        value,
      },
    });
  };

  const uploadImage = async (formData, imageType) => {
    dispatch({ type: UPLOAD_IMAGE_BEGIN });
    try {
      const {
        data: {
          image: { src },
        },
      } = await authFetch.post(`/shows/uploads-${imageType}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      dispatch({
        type: UPLOAD_IMAGE_SUCCESS,
        payload: {
          imageType,
          src,
        },
      });
    } catch (error) {
      dispatch({
        type: UPLOAD_IMAGE_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
      hideAlert();
    }
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createShow = async () => {
    dispatch({ type: CREATE_SHOW_BEGIN });
    const {
      artist,
      artistInfo,
      ticketPrice,
      status,
      performDate,
      performTime,
      artistImage,
      featureImage,
      published,
      featured,
    } = state;

    // combine performDate and performTime into performDateTime
    const formatDate = moment(performDate);
    const formatTime = moment(performTime);
    const performDateTime = formatDate
      .set({
        hour: formatTime.hour(),
        minute: formatTime.minute(),
        second: formatTime.second(),
      })
      .locale("en")
      .format("ddd MMM DD YYYY HH:mm:ss");

    // Convert a string of published and featured into Boolean
    const isPublished = JSON.parse(published);
    const isFeatured = JSON.parse(featured);

    // Convert a string to Number
    const ticketsPrice = parseInt(ticketPrice);

    try {
      await authFetch.post("/shows", {
        artist,
        artistInfo,
        ticketsPrice,
        status,
        performDate,
        performTime,
        performDateTime,
        artistImage,
        featureImage,
        isPublished,
        isFeatured,
      });
      dispatch({ type: CREATE_SHOW_SUCCESS });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_SHOW_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    hideAlert();
  };

  const getShows = async () => {
    clearValues();
    const { search, searchStatus, sort, page } = state;

    let url = `/shows?page=${page}&status=${searchStatus}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }

    dispatch({ type: GET_SHOWS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const { shows, totalShows, numOfPages } = data;
      dispatch({
        type: GET_SHOWS_SUCCESS,
        payload: {
          shows,
          totalShows,
          numOfPages,
        },
      });
    } catch (error) {
      logoutUser();
    }
  };

  const setEditShow = (id) => {
    dispatch({ type: SET_EDIT_SHOW, payload: { id } });
    clearFilters();
  };

  const editShow = async () => {
    const {
      artist,
      artistInfo,
      ticketPrice,
      status,
      performDate,
      performTime,
      artistImage,
      featureImage,
      published,
      featured,
    } = state;

    const formatDate = moment(performDate);
    const formatTime = moment(performTime);
    const performDateTime = formatDate
      .set({
        hour: formatTime.hour(),
        minute: formatTime.minute(),
        second: formatTime.second(),
      })
      .locale("en")
      .format("ddd MMM DD YYYY HH:mm:ss");

    const isPublished = JSON.parse(published);
    const isFeatured = JSON.parse(featured);

    const ticketsPrice = parseInt(ticketPrice);

    dispatch({ type: EDIT_SHOW_BEGIN });
    try {
      await authFetch.patch(`/shows/${state.editShowId}`, {
        artist,
        artistInfo,
        ticketsPrice,
        status,
        performDate,
        performTime,
        performDateTime,
        artistImage,
        featureImage,
        isPublished,
        isFeatured,
      });
      dispatch({
        type: EDIT_SHOW_SUCCESS,
        payload: {
          artist,
        },
      });
      clearValues();
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: EDIT_SHOW_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    hideAlert();
    clearFilters();
  };

  const deleteShow = async (id) => {
    dispatch({ type: DELETE_SHOW_BEGIN });
    try {
      await authFetch.delete(`/shows/${id}`);
      getShows();
    } catch (error) {
      if (error.response.status === 401) {
        logoutUser();
      }
      dispatch({
        type: DELETE_SHOW_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
      hideAlert();
    }
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  const getPublishedShows = async () => {
    dispatch({ type: GET_PUBLISHED_SHOWS_BEGIN });
    try {
      const { data } = await axios.get("/api/v1/shows/published");
      const { shows } = data;
      dispatch({
        type: GET_PUBLISHED_SHOWS_SUCCESS,
        payload: { shows },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getFeaturedShows = async () => {
    dispatch({ type: GET_FEATURED_SHOWS_BEGIN });
    try {
      const { data } = await axios.get("api/v1/shows/featured");
      const { shows } = data;
      dispatch({ type: GET_FEATURED_SHOWS_SUCCESS, payload: { shows } });
    } catch (error) {
      console.log(error.response);
    }
  };

  const showOverview = async () => {
    clearValues();
    clearFilters();

    dispatch({ type: SHOW_OVERVIEW_BEGIN });
    try {
      const { data } = await authFetch("/shows/overview");
      dispatch({
        type: SHOW_OVERVIEW_SUCCESS,
        payload: {
          overview: data.defaultOverview,
          monthlyApplication: data.monthlyApplication,
        },
      });
    } catch (error) {
      logoutUser();
    }
  };

  const getUpcomingShows = async () => {
    const { search, searchStatus, sort, page } = state;

    let url = `/shows/upcoming?page=${page}&status=${searchStatus}&sort=${sort}`;
    if (search) {
      url = url + `&search=${search}`;
    }

    dispatch({ type: GET_UPCOMING_SHOWS_BEGIN });
    try {
      const { data } = await authFetch.get(url);
      const { shows, totalShows, numOfPages } = data;
      dispatch({
        type: GET_UPCOMING_SHOWS_SUCCESS,
        payload: {
          shows,
          totalShows,
          numOfPages,
        },
      });
      getUserFavorites();
    } catch (error) {
      logoutUser();
    }
    hideMessage();
  };

  const updateFavorites = async (id) => {
    dispatch({ type: UPDATE_FAVORITE_BEGIN });
    try {
      const { data } = await authFetch.patch(`/auth/favorites/${id}`);
      const { user, favorites } = data;
      dispatch({
        type: UPDATE_FAVORITE_SUCCESS,
        payload: {
          user,
          favorites,
        },
      });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: UPDATE_FAVORITE_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
      hideAlert();
    }
  };

  const getUserFavorites = async () => {
    try {
      const { data } = await authFetch.get("/auth/favorites");
      const { favorites } = data;
      dispatch({
        type: GET_FAVORITES,
        payload: {
          favorites,
        },
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  const getFavoriteShows = async (req, res) => {
    dispatch({ type: GET_FAVORITE_SHOWS_BEGIN });
    try {
      const { data } = await authFetch.get("/shows/favorites");
      const { shows } = data;
      dispatch({
        type: GET_FAVORITE_SHOWS_SUCCESS,
        payload: {
          shows,
        },
      });
      getUserFavorites();
    } catch (error) {
      console.log(error.response);
    }
  };

  const addShowToLocalStorage = (show) => {
    localStorage.setItem("show", JSON.stringify(show));
  };

  const getArtist = async (id) => {
    dispatch({ type: GET_ARTIST_BEGIN });

    let url = `/api/v1/shows/artist/${id}`;
    try {
      const { data } = await axios.get(url);
      const { show } = data;
      dispatch({
        type: GET_ARTIST_SUCCESS,
        payload: {
          show,
        },
      });
      addShowToLocalStorage(show);
    } catch (error) {
      console.log(error.response);
    }
  };

  const sendSubscribeEmail = async (subscribeEmail) => {
    dispatch({ type: SEND_SUBSCRIBE_EMAIL_BEGIN });
    try {
      await axios.post("/api/v1/email/subscribe", {
        subscribeEmail,
      });
      dispatch({ type: SEND_SUBSCRIBE_EMAIL_SUCCESS });
    } catch (error) {
      dispatch({
        type: SEND_SUBSCRIBE_EMAIL_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
    hideMessage();
  };

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await authFetch.get("/auth/getCurrentUser");
      const { user, role } = data;
      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: {
          user,
          role,
        },
      });
    } catch (error) {
      if (error.response.status === 401) return;
      logoutUser();
    }
  };

  useEffect(() => {
    getCurrentUser();
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayMessage,
        hideMessage,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        handleInputChange,
        uploadImage,
        createShow,
        getShows,
        setEditShow,
        editShow,
        deleteShow,
        clearValues,
        clearFilters,
        changePage,
        getPublishedShows,
        getFeaturedShows,
        showOverview,
        getUpcomingShows,
        updateFavorites,
        getFavoriteShows,
        closeAlertFromAnotherPage,
        getArtist,
        sendSubscribeEmail,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
