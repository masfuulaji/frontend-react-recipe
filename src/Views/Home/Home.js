import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="tiny-slider-one-wrapper">
        <div className="tiny-slider-one">
          {/* Single Hero Slide */}
          <div>
            <div
              className="single-hero-slide bg-overlay"
              // style="background-image: url('img/bg-img/31.jpg')"
              style={{ backgroundImage: `url('/assets/img/bg-img/31.jpg')` }}
            >
              <div className="h-100 d-flex align-items-center text-center">
                <div className="container">
                  <h3 className="text-white mb-1">Build with Bootstrap 5</h3>
                  <p className="text-white mb-4">
                    Build fast, responsive sites with Bootstrap.
                  </p>
                  <a className="btn btn-creative btn-warning" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Single Hero Slide */}
          <div>
            <div
              className="single-hero-slide bg-overlay"
              // style="background-image: url('img/bg-img/33.jpg')"
            >
              <div className="h-100 d-flex align-items-center text-center">
                <div className="container">
                  <h3 className="text-white mb-1">Vanilla JavaScript</h3>
                  <p className="text-white mb-4">
                    The whole code is written with vanilla JS.
                  </p>
                  <a className="btn btn-creative btn-warning" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Single Hero Slide */}
          <div>
            <div
              className="single-hero-slide bg-overlay"
              // style="background-image: url('img/bg-img/32.jpg')"
            >
              <div className="h-100 d-flex align-items-center text-center">
                <div className="container">
                  <h3 className="text-white mb-1">PWA Ready</h3>
                  <p className="text-white mb-4">
                    Click the "Add to Home Screen" button &amp; <br /> enjoy it
                    like an app.
                  </p>
                  <a className="btn btn-creative btn-warning" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Single Hero Slide */}
          <div>
            <div
              className="single-hero-slide bg-overlay"
              // style="background-image: url('img/bg-img/33.jpg')"
            >
              <div className="h-100 d-flex align-items-center text-center">
                <div className="container">
                  <h3 className="text-white mb-1">
                    Lots of Elements &amp; Pages
                  </h3>
                  <p className="text-white mb-4">
                    Create your website in days, not months.
                  </p>
                  <a className="btn btn-creative btn-warning" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Single Hero Slide */}
          <div>
            <div
              className="single-hero-slide bg-overlay"
              // style="background-image: url('img/bg-img/1.jpg')"
            >
              <div className="h-100 d-flex align-items-center text-center">
                <div className="container">
                  <h3 className="text-white mb-1">Dark &amp; RTL Ready</h3>
                  <p className="text-white mb-4">
                    You can use the Dark or <br /> RTL mode of your choice.
                  </p>
                  <a className="btn btn-creative btn-warning" href="#">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
