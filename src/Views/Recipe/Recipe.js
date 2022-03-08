import React, { Component } from "react";
import { connect } from "react-redux";
import { retrievePosts } from "../../actions/posts";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

class Recipe extends Component {
  componentDidMount() {
    this.props.retrievePosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className="page-content-wrapper py-3">
        {/* Pagination */}
        <div className="page-content-wrapper py-3">
          <div className="container">
            <div className="row g-3 justify-content-center">
              {/* Single Blog Card */}
              {posts && posts.data === undefined ? (
                <div className="col-12 col-md-8 col-lg-7 col-xl-6">
                  <div className="card shadow-sm blog-list-card">
                    <div className="d-flex align-items-center">
                      <div className="card-blog-img position-relative">
                        <Skeleton className="m-2" height={150}></Skeleton>
                      </div>
                      <div className="card-blog-content">
                        <Skeleton count={5}></Skeleton>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                posts.data.data.map((post, index) => (
                  <div
                    className="col-12 col-md-8 col-lg-7 col-xl-6"
                    key={index}
                  >
                    <div className="card shadow-sm blog-list-card">
                      <div className="d-flex align-items-center">
                        <div
                          className="card-blog-img position-relative"
                          style={{
                            backgroundImage: `url('/assets/img/bg-img/22.jpg')`,
                          }}
                        >
                          <span className="badge bg-warning text-dark position-absolute card-badge">
                            {post.title}
                          </span>
                        </div>
                        <div className="card-blog-content">
                          <Link
                            className="blog-title d-block mb-3 text-dark"
                            to={`${post.slug}`}
                          >
                            {post.sub_title}
                          </Link>
                          <span className="badge bg-primary rounded-pill mb-2 d-inline-block">
                            {post.time} {post.time_unit}
                          </span>
                          <span className="badge bg-success rounded-pill mb-2 d-inline-block">
                            {post.total} {post.total_unit}
                          </span>
                          <span className="badge bg-info rounded-pill mb-2 d-inline-block">
                            {post.serialize_level}
                          </span>
                          <Link
                            className="btn btn-primary btn-sm"
                            to={`${post.slug}`}
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-7 col-xl-6">
                <div className="card mt-3">
                  <div className="card-body p-3">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination justify-content-center pagination-one direction-rtl">
                        <li className="page-item disabled">
                          <a
                            className="page-link"
                            href="#"
                            aria-label="Previous"
                          >
                            <svg
                              className="bi bi-chevron-left"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                              ></path>
                            </svg>
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            ...
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            9
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <svg
                              className="bi bi-chevron-right"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                              ></path>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Recipe.defaultProps = {
  posts: [],
};
const mapStateToProps = (state) => ({
  posts: state.posts,
});
export default connect(mapStateToProps, {
  retrievePosts,
})(Recipe);
