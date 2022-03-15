import React, { useState, useEffect } from "react";
import CardSkeleton from "../../Components/Skeleton/CardSkeleton";
import CategoryDataService from "../../services/category.service";
import { Link } from "react-router-dom";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [currentCategoryName, setCategoryName] = useState("");
  const [posts, setPosts] = useState([]);

  const getCategories = async () => {
    CategoryDataService.getAll()
      .then((response) => {
        setCategories(response.data.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getCategory = async () => {
    CategoryDataService.getCategoryPost(currentCategoryName)
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setActiveCategory = (name) => {
    setCategoryName(name);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="page-content-wrapper py-3">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="form-group">
              <label className="form-label" htmlFor="defaultSelect">
                Category
              </label>
              <div className="row">
                <div className="col-10">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={currentCategoryName}
                    onChange={(event) => setActiveCategory(event.target.value)}
                  >
                    <option value={""}>--Select Category--</option>
                    {categories.length > 0 ? (
                      categories.map((category, index) => (
                        <option key={category.id} value={category.name}>
                          {category.name}
                        </option>
                      ))
                    ) : (
                      <option value={""}>--Empty--</option>
                    )}
                  </select>
                </div>
                <div className="col-2">
                  <button
                    onClick={() => getCategory()}
                    className="btn m-1 btn-outline-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-3 justify-content-center mt-2">
          {posts ? (
            posts.map((post, index) => (
              <div className="col-12 col-md-8 col-lg-7 col-xl-6" key={index}>
                <div className="card shadow-sm blog-list-card">
                  <div className="d-flex align-items-center">
                    <div
                      className="card-blog-img position-relative"
                      style={{
                        backgroundImage: `url('/assets/img/bg-img/22.jpg')`,
                        height: `220px`,
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
          ) : (
            <div>allo</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
