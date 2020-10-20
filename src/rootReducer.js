import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  ERROR,
  GET_TITLES,
  GET_POST,
} from "./actionTypes";
// import INITIAL_STATE from "./sampleDataRedux";
const INITIAL_STATE = {
  posts: [],
  titles: [],
  error: false,
};

const rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERROR: {
      return { ...state, error: true };
    }

    case GET_TITLES: {
      return { ...state, titles: action.titles };
    }

    case GET_POST: {
      return { ...state, posts: [...state.posts, action.post] };
    }

    case CREATE_POST: {
      const stateCopy = { ...state };
      stateCopy.posts[action.id] = action.data;
      return stateCopy;
    }

    case EDIT_POST: {
      const stateCopy = { ...state };
      stateCopy.posts[action.id] = action.data;
      return stateCopy;
    }
    case DELETE_POST: {
      const stateCopy = { ...state };
      delete stateCopy.posts[action.id];
      return stateCopy;
    }
    case ADD_COMMENT: {
      const stateCopy = { ...state };
      stateCopy.posts[action.id].comments.push(action.data);

      return stateCopy;
    }
    case DELETE_COMMENT: {
      const stateCopy = { ...state };
      stateCopy.posts[action.postId].comments = stateCopy.posts[
        action.postId
      ].comments.filter((comment) => comment.commentId !== action.commentId);

      return stateCopy;
    }

    default:
      return state;
  }
};

export default rootReducer;
