import {
  CREATE_POST,
  EDIT_POST,
  DELETE_COMMENT,
  ADD_COMMENT,
  DELETE_COMMENT,
} from "./actionTypes";

export function createPost(data) {
  return {
    type: CREATE_POST,
    data,
  };
}
