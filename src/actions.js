import axios from "axios";
import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  GET_TITLES,
  ERROR,
  GET_POST,
} from "./actionTypes";

const API_URL = "http://localhost:5000";

export function createPost(newPost) {
  return {
    type: CREATE_POST,
    newPost,
  };
}

export function editPost(id, updatedPost) {
  return {
    type: EDIT_POST,
    id,
    updatedPost,
  };
}
export function deletePost(id) {
  return {
    type: DELETE_POST,
    id,
  };
}
export function addComment(postId, data) {
  return {
    type: ADD_COMMENT,
    postId,
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

export function getPost(post) {
  return {
    type: GET_POST,
    post,
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

export function getPostFromAPI(id) {
  return async function (dispatch) {
    try {
      let post = await axios.get(`${API_URL}/api/posts/${id}`);
      dispatch(getPost(post.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function createPostAPI(newPost) {
  return async function (dispatch) {
    try {
      let post = await axios.post(`${API_URL}/api/posts`, newPost);
      dispatch(createPost(post.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function editPostAPI(id, postData) {
  return async function (dispatch) {
    try {
      let updatedPost = await axios.put(`${API_URL}/api/posts/${id}`, postData);
      dispatch(editPost(id, updatedPost.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function deletePostAPI(id) {
  return async function (dispatch) {
    try {
      let res = await axios.delete(`${API_URL}/api/posts/${id}`);
      dispatch(deletePost(id));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function addCommentAPI(postId, comment) {
  return async function (dispatch) {
    try {
      let res = await axios.post(
        `${API_URL}/api/posts/${postId}/comments`,
        comment
      );
      dispatch(addComment(postId, res.data));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}

export function deleteCommentAPI(postId, commentId) {
  return async function (dispatch) {
    try {
      let res = await axios.delete(
        `${API_URL}/api/posts/${postId}/comments/${commentId}`
      );
      dispatch(deleteComment(postId, commentId));
    } catch (error) {
      dispatch(handleError(error.response.data));
    }
  };
}
