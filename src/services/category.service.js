import http from "../http-common";
class CategoryDataService {
  getAll() {
    return http.get("/category");
  }
  get(id) {
    return http.get(`/category/${id}`);
  }
  getCategoryPost(name, pagination = false) {
    return http.get(`/category/${name}?pagination=${pagination}`);
  }
}
export default new CategoryDataService();
