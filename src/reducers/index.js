import {
  GET_POSTS,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE,
  ADD_POST,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  EDIT_POST,
  EDIT_POST_SUCCESS,
  EDIT_POST_FAILURE,
  ADD_COMMENT,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILURE,
  SEARCH,
  SIGN_UP,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_IN,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from "../actions";

const initialState = {
  posts: [],
  searchedPosts: [],
  post: {},
  searchInput: "",
  fetchingPosts: false,
  fetchingPost: false,
  addingPost: false,
  addingComment: false,
  updatingPost: false,
  deletingPost: false,
  signingIn: false,
  signedIn: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        fetchingPosts: true,
        error: null
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        fetchingPosts: false
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        error: action.payload
      };
    case GET_POST:
      return {
        ...state,
        fetchingPost: true,
        error: null
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: action.payload,
        fetchingPost: false
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        fetchingPost: false,
        error: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        addingPost: true,
        error: null
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addingPost: false,
        posts: [...state.posts, action.payload]
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addingPost: false,
        error: action.payload
      };
    case DELETE_POST:
      return {
        ...state,
        deletingPost: true,
        error: null
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        deletingPost: false,
        posts: state.posts.filter(post => post._id !== action.payload._id)
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        deletingPost: false,
        error: action.payload
      };
    case EDIT_POST:
      return {
        ...state,
        editingPost: true,
        error: null
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        editingPost: false,
        post: action.payload,
        posts: state.posts.map(post => {
          if (post._id === action.payload._id) {
            return action.payload;
          }
          return post;
        })
      };
    case EDIT_POST_FAILURE:
      return {
        ...state,
        editingPost: false,
        error: action.payload
      };
    case ADD_COMMENT:
      return {
        ...state,
        addingComment: true,
        error: null
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addingComment: false,
        post: {
          ...state.post,
          comments: [...state.post.comments, action.payload]
        }
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addingComment: false,
        error: action.payload
      };
    case SEARCH:
      return {
        ...state,
        searchedPosts: state.posts.filter(post =>
          post["username"].toLowerCase().includes(action.payload.toLowerCase())
        ),
        searchInput: action.payload
      };
    case SIGN_IN:
      return {
        ...state,
        signingIn: true,
        error: null
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        signedIn: true
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        signingIn: false,
        signedIn: false,
        error: action.payload
      };
    case SIGN_UP:
      return {
        ...state,
        signingIn: true,
        error: null
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signingIn: false,
        signedIn: true
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signingIn: false,
        signedIn: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
