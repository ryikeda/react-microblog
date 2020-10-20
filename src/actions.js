import axios from "axios";
import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  GET_TITLES,
  ERROR,
} from "./actionTypes";

const API_URL = "http://localhost:5000";

export function createPost(id, data) {
  return {
    type: CREATE_POST,
    id,
    data,
  };
}

export function editPost(id, data) {
  return {
    type: EDIT_POST,
    id,
    data,
  };
}
export function deletePost(id) {
  return {
    type: DELETE_POST,
    id,
  };
}
export function addComment(id, data) {
  return {
    type: ADD_COMMENT,
    id,
    data,
  };
}
export function deleteComment(postId, commentId) {
  return {
    type: DELETE_COMMENT,
    postId,
    commentId,
  };
}

export function getTitles(titles) {
  return {
    type: GET_TITLES,
    titles,
  };
}

export function handleError(error) {
  return {
    type: ERROR,
    error,
  };
}

export function getTitlesFromAPI() {
  return async function (dispatch) {
    try {
      let titles = await axios.get(`${API_URL}/api/posts/`);
      dispatch(getTitles(titles.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}
