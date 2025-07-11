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
  SIGN_IN_FAILURE,
  GET_COMMENTS,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILURE,
  LIKE_POST,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAILURE,
} from "../actions";

const initialState = {
  posts: [],
  searchedPosts: [],
  post: {},
  searchInput: "",
  fetchingPosts: false,
  fetchingPost: false,
  fetchingComments: false,
  addingPost: false,
  addingComment: false,
  updatingPost: false,
  likingPost: false,
  deletingPost: false,
  signingIn: false,
  signedIn: localStorage.getItem("token") ? true : false,
  currentUser: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        fetchingPosts: true,
        error: null,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload.map((post) => {
          post.likes = Number(post.likes);
          return post;
        }),
        fetchingPosts: false,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        fetchingPosts: false,
        error: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        fetchingPost: true,
        error: null,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        post: { ...action.payload, likes: Number(action.payload.likes) },
        fetchingPost: false,
      };
    case GET_POST_FAILURE:
      return {
        ...state,
        fetchingPost: false,
        error: action.payload,
      };
    case ADD_POST:
      return {
        ...state,
        addingPost: true,
        error: null,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        addingPost: false,
        posts: [...state.posts, action.payload],
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        addingPost: false,
        error: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        deletingPost: true,
        error: null,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        deletingPost: false,
        posts: state.posts.filter((post) => post.id !== action.payload.id),
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        deletingPost: false,
        error: action.payload,
      };
    case EDIT_POST:
      return {
        ...state,
        editingPost: true,
        error: null,
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        editingPost: false,
        post: action.payload,
        posts: state.posts.map((post) => {
          if (post.id === action.payload.id) {
            return action.payload;
          }
          return post;
        }),
      };
    case EDIT_POST_FAILURE:
      return {
        ...state,
        editingPost: false,
        error: action.payload,
      };
    case ADD_COMMENT:
      return {
        ...state,
        addingComment: true,
        error: null,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addingComment: false,
        post: state.post.id
          ? {
              ...state.post,
              comments: [...state.post.comments, action.payload],
            }
          : state.post,
        posts: state.posts.map((post) => {
          if (post.id !== action.post_id) {
            return post;
          } else {
            const newPost = { ...post };
            newPost.comments = [...newPost.comments, action.payload];
            return newPost;
          }
        }),
      };
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addingComment: false,
        error: action.payload,
      };
    case GET_COMMENTS:
      return {
        ...state,
        fetchingComments: true,
        error: null,
      };
    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        fetchingComments: false,
        posts: state.posts.map((post) => {
          if (post.id !== action.post_id) {
            return post;
          } else {
            const newPost = { ...post, comments: action.payload };
            return newPost;
          }
        }),
      };
    case GET_COMMENTS_FAILURE:
      return {
        ...state,
        fetchingComments: false,
        error: action.payload,
      };
    case SEARCH:
      return {
        ...state,
        searchedPosts: state.posts.filter((post) =>
          post["username"].toLowerCase().includes(action.payload.toLowerCase())
        ),
        searchInput: action.payload,
      };
    case SIGN_IN:
      return {
        ...state,
        signingIn: true,
        error: null,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        signedIn: true,
        currentUser: {
          username: action.user.username,
          userID: action.user.userID,
        },
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        signingIn: false,
        signedIn: false,
        error: action.payload,
      };
    case SIGN_UP:
      return {
        ...state,
        signingIn: true,
        error: null,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signingIn: false,
        signedIn: true,
        currentUser: {
          username: action.user.username,
          userID: action.user.userID,
        },
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signingIn: false,
        signedIn: false,
        error: action.payload,
      };
    case LIKE_POST:
      return {
        ...state,
        likingPost: true,
        error: null,
      };
    case LIKE_POST_SUCCESS:
      return {
        ...state,
        likingPost: false,
        post:
          action.payload.liked && state.post.id === action.payload.post_id
            ? { ...state.post, likes: (state.post.likes += 1) }
            : !action.payload.liked && state.post.id === action.payload.post_id
            ? { ...state.post, likes: (state.post.likes -= 1) }
            : state.post,
        posts: action.payload.liked
          ? state.posts.map((post) => {
              if (post.id === action.payload.post_id) {
                const newPost = { ...post };
                newPost.likes += 1;
                return newPost;
              } else {
                return post;
              }
            })
          : state.posts.map((post) => {
              if (post.id === action.payload.post_id) {
                const newPost = { ...post };
                newPost.likes -= 1;
                return newPost;
              } else {
                return post;
              }
            }),
      };
    case LIKE_POST_FAILURE:
      return {
        ...state,
        likingPost: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
