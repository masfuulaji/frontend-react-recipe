import http from "../http-common";
class PostDataService {
    getAll() {
      return http.get("/post");
    }
    get(id) {
      return http.get(`/post/${id}`);
    }
    findBySlug(slug) {
      return http.get(`/post/${slug}`);
    }
  }
  export default new PostDataService();