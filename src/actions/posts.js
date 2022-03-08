import {
  RETRIEVE_POSTS,
} from "./types";
import PostDataService from "../services/post.service";
export const retrievePosts = () => async (dispatch) => {
  try {
    const res = await PostDataService.getAll();
    dispatch({
      type: RETRIEVE_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const findPostsBySlug = (slug) => async (dispatch) => {
  try {
    const res = await PostDataService.findBySlug(slug);
    dispatch({
      type: RETRIEVE_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
