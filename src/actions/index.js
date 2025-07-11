import axios from "axios";
const endpoint = process.env.REACT_APP_BACKENDPOINT;

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// Requests the entire posts array
export const getPosts = () => (dispatch) => {
  dispatch({ type: GET_POSTS });
  axios
    .get(`${endpoint}/api/posts/`)
    .then((res) => {
      dispatch({ type: GET_POSTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_POSTS_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};

// Requests a specific post
export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILURE = "GET_POST_FAILURE";

export const getPost = (id) => (dispatch) => {
  dispatch({ type: GET_POST });
  axios
    .get(`${endpoint}/api/posts/${id}/`)
    .then((res) => {
      dispatch({ type: GET_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_POST_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};

export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

// Add a new post
export const addPost = (post) => (dispatch) => {
  dispatch({ type: ADD_POST });
  axios
    .post(`${endpoint}/api/posts/`, post)
    .then((res) => {
      dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: ADD_POST_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};

// Delete a post
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const deletePost = (id) => (dispatch) => {
  dispatch({ type: DELETE_POST });
  axios
    .delete(`${endpoint}/api/posts/${id}/`)
    .then((res) => {
      dispatch({ type: DELETE_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_POST_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};

export const EDIT_POST = "EDIT_POST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";

// Edit a post
export const editPost = (post) => (dispatch) => {
  dispatch({ type: EDIT_POST });
  axios
    .put(`${endpoint}/api/posts/${post.id}/`, post)
    .then((res) => {
      dispatch({ type: EDIT_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_POST_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};

export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addComment = (comment) => (dispatch) => {
  dispatch({ type: ADD_COMMENT });
  return axios
    .post(`${endpoint}/api/posts/${comment.post_id}/comments`, comment)
    .then((res) => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: res.data,
        post_id: comment.post_id,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_COMMENT_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};

export const SEARCH = "SEARCH";

export const searchBar = (search) => {
  return { type: SEARCH, payload: search };
};

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = (userInfo) => (dispatch) => {
  dispatch({ type: SIGN_UP });
  return axios
    .post(`${endpoint}/auth/register/`, userInfo)
    .then((res) => {
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data.token,
        user: {
          userID: res.data.userID,
          username: userInfo.username,
        },
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.userID);
    })
    .catch((err) => {
      dispatch({
        type: SIGN_UP_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};

export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const signIn = (userInfo) => (dispatch) => {
  dispatch({ type: SIGN_IN });
  return axios
    .post(`${endpoint}/auth/login/`, userInfo)
    .then((res) => {
      dispatch({
        type: SIGN_IN_SUCCESS,
        payload: res.data.token,
        user: {
          userID: res.data.userID,
          username: userInfo.username,
        },
      });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.userID);
    })
    .catch((err) => {
      dispatch({
        type: SIGN_IN_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};

export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

// Requests the entire posts' comments array
export const getComments = (id) => (dispatch) => {
  dispatch({ type: GET_COMMENTS });
  axios
    .get(`${endpoint}/api/posts/${id}/comments/`)
    .then((res) => {
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: res.data, post_id: id });
    })
    .catch((err) => {
      dispatch({
        type: GET_COMMENTS_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};

export const LIKE_POST = "LIKE_POST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const likePost = (info) => (dispatch) => {
  dispatch({ type: LIKE_POST });
  axios
    .post(`${endpoint}/api/likes/`, info)
    .then((res) => {
      dispatch({ type: LIKE_POST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: LIKE_POST_FAILURE,
        payload: `${err.message}. ${err.response.data.message}`,
      });
    });
};
