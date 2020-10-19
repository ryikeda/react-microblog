import {
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
} from "./actionTypes";

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
