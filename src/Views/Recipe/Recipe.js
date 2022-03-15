import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrievePosts } from "../../actions/posts";
import RecipeCard from "./RecipeCard";
import CardSkeleton from "../../Components/Skeleton/CardSkeleton";

const Recipe = () => {
  const posts = useSelector((state) => (state.posts.listPost ? state.posts.listPost : false));
  const dispatch = useDispatch();
  const getPosts = async () => {
    dispatch(retrievePosts());
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div className="page-content-wrapper py-3">
      {/* Pagination */}
      <div className="page-content-wrapper py-3">
        <div className="container">
          {/* Single Blog Card */}
          {posts ? (
            <div className="row g-3 justify-content-center">
              <RecipeCard />
            </div>
          ) : (
            <div className="row g-3 justify-content-center">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          )}
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-8 col-lg-7 col-xl-6">
              <div className="card mt-3">
                <div className="card-body p-3">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center pagination-one direction-rtl">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
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
};

export default Recipe;
