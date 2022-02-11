import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipe extends Component {
  render() {
    return (
      <div className="page-content-wrapper py-3">
        {/* Pagination */}
        <div className="shop-pagination pb-3">
          <div className="container">
            <div className="card">
              <div className="card-body p-2">
                <div className="d-flex align-items-center justify-content-between">
                  <small className="ms-1">Showing 6 of 31</small>
                  <form action="#">
                    <select
                      className="pe-4 form-select form-select-sm"
                      aria-label="Default select example"
                    >
                      <option value="1">Sort by Newest</option>
                      <option value="2">Sort by Older</option>
                      <option value="3">Sort by Ratings</option>
                      <option value="4">Sort by Sales</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Top Products */}
        <div className="top-products-area product-list-wrap">
          <div className="container">
            <div className="row g-3">
              {/* Single Top Product Card */}
              <div className="col-12">
                <div className="card single-product-card">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="card-side-img">
                        {/* Product Thumbnail */}
                        <Link className="product-thumbnail d-block" to="/">
                          <img src="/assets/img/bg-img/p1.jpg" alt="" />
                          {/* Badge */}
                          <span className="badge bg-primary">Sale</span>
                        </Link>
                      </div>
                      <div className="card-content px-4 py-2">
                        {/* Product Title */}
                        <Link
                          className="product-title d-block text-truncate mt-0"
                          to="/"
                        >
                          Wooden Tool
                        </Link>
                        {/* Product Price */}
                        <p className="sale-price">
                          Mudah<span></span>
                        </p>
                        {/* Add To Cart Button */}
                        <Link to="/" className="btn btn-outline-primary btn-sm" >
                          Detail Recipe
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Product List */}
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="shop-pagination pt-3">
          <div className="container">
            <div className="card">
              <div className="card-body py-3">
                <nav aria-label="Page navigation example">
                  <ul className="pagination pagination-two justify-content-center">
                    <li className="page-item">
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
                        3
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
    );
  }
}

export default Recipe;
