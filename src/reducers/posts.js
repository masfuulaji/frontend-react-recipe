import { RETRIEVE_POSTS, RETRIEVE_POST_DETAIL } from "../actions/types";
const initialState = {
  listPost: null,
  detailPost: null,
};
function postReducer(posts = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_POSTS:
      return {
        ...posts,
        listPost: payload,
      };
    case RETRIEVE_POST_DETAIL:
      return {
        ...posts,
        detailPost: payload,
      };
    default:
      return posts;
  }
}
export default postReducer;
