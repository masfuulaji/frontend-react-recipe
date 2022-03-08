import {
  RETRIEVE_POSTS,
} from "../actions/types";
const initialState = [];
function postReducer(posts = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_POSTS:
      return payload;
    default:
      return posts;
  }
}
export default postReducer;
