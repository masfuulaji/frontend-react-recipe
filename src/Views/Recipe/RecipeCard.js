import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const RecipeCard = () => {
  const posts = useSelector((state) =>
    state.posts.listPost ? state.posts.listPost.data.data : false
  );

  const renderList = posts.map((post, index) => {
    return (
      <div className="col-12 col-md-8 col-lg-7 col-xl-6" key={index}>
        <div className="card shadow-sm blog-list-card">
          <div className="d-flex align-items-center">
            <div
              className="card-blog-img position-relative"
              style={{
                backgroundImage: `url('/assets/img/bg-img/22.jpg')`,
                height: `220px`
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
              <Link className="btn btn-primary btn-sm" to={`${post.slug}`}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{renderList}</>;
};
export default RecipeCard;
