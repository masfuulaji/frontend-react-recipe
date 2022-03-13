import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RecipeCard = () => {
  return (
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
  );
};
export default RecipeCard;
