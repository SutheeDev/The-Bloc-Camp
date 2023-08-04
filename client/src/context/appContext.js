import React, { useState, useEffect, useContext, useReducer } from "react";

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
} from "./actions";
import moment from "moment";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

const initialState = {
  showMessage: false,
  showAlert: false,
  messageText: "",
  messageType: "",
  isLoading: false,
  user: JSON.parse(user) || null,
  token: token,
  role: role,
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
  statusOptions: ["upcoming", "canceled", "sold out"],

  shows: [],
  totalShows: 0,
  numOfPages: 1,
  page: 1,

  search: "",
  searchStatus: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],

  featuredShows: [],

  overview: {},
  monthloyApplications: [],
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const authFetch = axios.create({
    baseURL: "/api/v1",
  });

  authFetch.interceptors.request.use(
    (config) => {
      config.headers["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

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

  const displayAlert = () => {
    dispatch({ type: SHOW_ALERT });
    hideAlert();
  };

  const hideAlert = () => {
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, role }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_BEGIN });
    try {
      const response = await axios.post("api/v1/auth/register", currentUser);
      const { user, token } = response.data;
      dispatch({ type: REGISTER_SUCCESS, payload: { user, token } });
      addUserToLocalStorage({ user, token });
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
      const { user, token, role } = response.data;
      dispatch({ type: LOGIN_SUCCESS, payload: { user, token, role } });
      addUserToLocalStorage({ user, token, role });
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

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch("/auth/updateuser", currentUser);
      const { user, token, role } = data;
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: {
          user,
          token,
          role,
        },
      });
      addUserToLocalStorage({ user, token, role });
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
      console.log(error.response);
      dispatch({
        type: UPLOAD_IMAGE_ERROR,
        payload: {
          msg: error.response.data.msg,
        },
      });
    }
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createShow = async () => {
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
    // const formatDate = moment(performDate).format("ddd MMM DD YYYY");
    // const formatTime = moment(performTime).format("hh:mmA");
    // const formatDate = new Date(performDate);

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

    const now = moment().format("ddd MMM DD YYYY HH:mm:ss");
    console.log(now, performDate, performTime);

    dispatch({ type: CREATE_SHOW_BEGIN });
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
      console.log(error.response);
      // logoutUser();
    }
    hideMessage();
  };

  const setEditShow = (id) => {
    dispatch({ type: SET_EDIT_SHOW, payload: { id } });
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
      dispatch({ type: CLEAR_VALUES });
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
  };

  const deleteShow = async (id) => {
    dispatch({ type: DELETE_SHOW_BEGIN });
    try {
      await authFetch.delete(`/shows/${id}`);
      getShows();
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
  };

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  const changePage = (page) => {
    dispatch({ type: CHANGE_PAGE, payload: { page } });
  };

  const getPublishedShows = async () => {
    const { page } = state;
    let url = `/api/v1/shows/published?page=${page}`;
    dispatch({ type: GET_PUBLISHED_SHOWS_BEGIN });
    try {
      const { data } = await axios.get(url);
      const { shows, totalShows, numOfPages } = data;
      dispatch({
        type: GET_PUBLISHED_SHOWS_SUCCESS,
        payload: { shows, totalShows, numOfPages },
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
    dispatch({ type: SHOW_OVERVIEW_BEGIN });
    try {
      const { data } = await authFetch("/shows/overview");
      console.log(data);
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
  };

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
