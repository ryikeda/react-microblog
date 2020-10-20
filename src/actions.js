import axios from "axios";
import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  GET_POSTS,
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

export function getPosts(posts) {
  return {
    type: GET_POSTS,
    posts,
  };
}

export function handleError(error) {
  return {
    type: ERROR,
    error,
  };
}

export function getPostsFromAPI() {
  return async function (dispatch) {
    try {
      let posts = await axios.get(`${API_URL}/api/posts`);
      dispatch(getPosts(posts.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}
