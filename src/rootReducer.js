import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  ERROR,
  GET_TITLES,
  GET_POST,
  UPDATE_VOTES,
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
      return {
        ...state,
        titles: [...state.titles, action.newPost],
      };
    }

    case EDIT_POST: {
      const stateCopy = { ...state };
      // Find index for titles and posts
      const titlesIdx = stateCopy.titles.findIndex(
        (title) => title.id === Number(action.id)
      );
      const postIdx = stateCopy.posts.findIndex(
        (post) => post.id === Number(action.id)
      );

      // Update their values
      stateCopy.titles[titlesIdx] = action.updatedPost;
      const { title, description, body } = action.updatedPost;
      stateCopy.posts[postIdx].title = title;
      stateCopy.posts[postIdx].description = description;
      stateCopy.posts[postIdx].body = body;

      return stateCopy;
    }

    case DELETE_POST: {
      const stateCopy = { ...state };
      // Find index for titles and posts
      const titlesIdx = stateCopy.titles.findIndex(
        (title) => title.id === Number(action.id)
      );
      const postIdx = stateCopy.posts.findIndex(
        (post) => post.id === Number(action.id)
      );

      // Delete from array
      stateCopy.titles = stateCopy.titles.slice(titlesIdx, 1);
      stateCopy.posts = stateCopy.posts.slice(postIdx, 1);

      return stateCopy;
    }
    case ADD_COMMENT: {
      const stateCopy = { ...state };
      const postIdx = stateCopy.posts.findIndex(
        (post) => post.id === Number(action.postId)
      );
      stateCopy.posts[postIdx].comments.push(action.data);

      return stateCopy;
    }
    case DELETE_COMMENT: {
      const stateCopy = { ...state };
      const postIdx = stateCopy.posts.findIndex(
        (post) => post.id === Number(action.postId)
      );

      stateCopy.posts[postIdx].comments = stateCopy.posts[
        postIdx
      ].comments.filter((comment) => comment.id !== action.commentId);

      return stateCopy;
    }

    case UPDATE_VOTES: {
      const stateCopy = { ...state };
      // Find index for titles and posts
      const titlesIdx = stateCopy.titles.findIndex(
        (title) => title.id === Number(action.postId)
      );
      const postIdx = stateCopy.posts.findIndex(
        (post) => post.id === Number(action.postId)
      );

      if (postIdx !== -1) {
        stateCopy.posts[postIdx].votes = action.votes;
      }
      stateCopy.titles[titlesIdx].votes = action.votes;

      return stateCopy;
    }

    default:
      return state;
  }
};

export default rootReducer;
