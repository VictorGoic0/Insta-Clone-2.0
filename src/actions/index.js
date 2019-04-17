import axios from "axios";

export const GET_POSTS = "GET_POSTS";
export const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
export const GET_POSTS_FAILURE = "GET_POSTS_FAILURE";

// Requests the entire posts array
export const getPosts = () => dispatch => {
  dispatch({ type: GET_POSTS });
  axios
    .get("https://goico-insta-backend.herokuapp.com/api/posts/")
    .then(res => {
      console.log(res);
      dispatch({ type: GET_POSTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_POSTS_FAILURE, payload: err.message });
    });
};

// Requests a specific post
export const GET_POST = "GET_POST";
export const GET_POST_SUCCESS = "GET_POST_SUCCESS";
export const GET_POST_FAILURE = "GET_POST_FAILURE";

export const getPost = id => dispatch => {
  dispatch({ type: GET_POST });
  axios
    .get(`https://goico-insta-backend.herokuapp.com/api/posts/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_POST_FAILURE, payload: err.message });
    });
};

export const ADD_POST = "ADD_POST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

// Add a new post
export const addPost = post => dispatch => {
  dispatch({ type: ADD_POST });
  axios
    .post("https://goico-insta-backend.herokuapp.com/api/posts/", post)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_POST_FAILURE, payload: err.message });
    });
};

// Delete a post
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const deletePost = id => dispatch => {
  dispatch({ type: DELETE_POST });
  axios
    .delete(`https://goico-insta-backend.herokuapp.com/api/posts/${id}`)
    .then(res => {
      console.log(res);
      dispatch({ type: DELETE_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_POST_FAILURE, payload: err.message });
    });
};

export const EDIT_POST = "EDIT_POST";
export const EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS";
export const EDIT_POST_FAILURE = "EDIT_POST_FAILURE";

// Edit a post
export const editPost = post => dispatch => {
  dispatch({ type: EDIT_POST });
  axios
    .put(`https://goico-insta-backend.herokuapp.com/api/posts/${post.id}`, post)
    .then(res => {
      console.log(res);
      dispatch({ type: EDIT_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: EDIT_POST_FAILURE, payload: err.message });
    });
};

export const ADD_COMMENT = "ADD_COMMENT";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const addComment = comment => dispatch => {
  dispatch({ type: ADD_COMMENT });
  return axios
    .post(
      `https://goico-insta-backend.herokuapp.com/api/posts/${
        comment.post_id
      }/comments`,
      comment
    )
    .then(res => {
      dispatch({
        type: ADD_COMMENT_SUCCESS,
        payload: res.data,
        post_id: comment.post_id
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_COMMENT_FAILURE, payload: err.message });
      return err;
    });
};

export const SEARCH = "SEARCH";

export const searchBar = search => {
  return { type: SEARCH, payload: search };
};

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const signUp = userInfo => dispatch => {
  dispatch({ type: SIGN_UP });
  return axios
    .post("https://goico-insta-backend.herokuapp.com/auth/register", userInfo)
    .then(res => {
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.token });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.userID);
    })
    .catch(err => {
      dispatch({ type: SIGN_UP_FAILURE, payload: err.message });
    });
};

export const SIGN_IN = "SIGN_IN";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";

export const signIn = userInfo => dispatch => {
  dispatch({ type: SIGN_IN });
  return axios
    .post("https://goico-insta-backend.herokuapp.com/auth/login", userInfo)
    .then(res => {
      dispatch({ type: SIGN_IN_SUCCESS, payload: res.data.token });
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userID", res.data.userID);
    })
    .catch(err => {
      dispatch({ type: SIGN_IN_FAILURE, payload: err.message });
    });
};

export const GET_COMMENTS = "GET_COMMENTS";
export const GET_COMMENTS_SUCCESS = "GET_COMMENTS_SUCCESS";
export const GET_COMMENTS_FAILURE = "GET_COMMENTS_FAILURE";

// Requests the entire posts' comments array
export const getComments = id => dispatch => {
  dispatch({ type: GET_COMMENTS });
  axios
    .get(`https://goico-insta-backend.herokuapp.com/api/posts/${id}/comments`)
    .then(res => {
      console.log(res);
      dispatch({ type: GET_COMMENTS_SUCCESS, payload: res.data, id });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: GET_COMMENTS_FAILURE, payload: err.message });
    });
};

export const LIKE_POST = "LIKE_POST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const likePost = info => dispatch => {
  dispatch({ type: LIKE_POST });
  axios
    .post(`https://goico-insta-backend.herokuapp.com/api/likes`)
    .then(res => {
      console.log(res);
      dispatch({ type: LIKE_POST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: LIKE_POST_FAILURE, payload: err.message });
    });
};
