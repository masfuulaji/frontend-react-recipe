import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonDetail = () => {
  return (
    <div className="page-content-wrapper">
      <div className="container">
        <div className="pt-3 d-block"></div>
        <div className="blog-details-post-thumbnail position-relative">
          <Skeleton height={400}></Skeleton>
        </div>
      </div>
      <div className="blog-description py-3">
        <div className="container">
          <h3 className="mb-3">
            <Skeleton count={1}></Skeleton>
          </h3>
          <div className="d-flex align-items-center mb-4">
            <Skeleton count={1}></Skeleton>
          </div>
          <Skeleton count={15}></Skeleton>
        </div>
      </div>
      {/* All Comments */}
      <div className="rating-and-review-wrapper pb-3 mt-3">
        <div className="container">
          <h6 className="mb-3">All comments</h6>
          {/* Rating Review */}
          <div className="rating-review-content">
            <ul className="ps-2">
              <li className="single-user-review d-flex">
                <Skeleton count={2}></Skeleton>
              </li>
              <li className="single-user-review d-flex">
                <Skeleton count={2}></Skeleton>
              </li>
              <li className="single-user-review d-flex">
                <Skeleton count={2}></Skeleton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SkeletonDetail;
