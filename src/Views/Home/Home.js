import React, { Component } from "react";
import TinySlider from "tiny-slider-react";
import "tiny-slider/dist/tiny-slider.css";

const settings = {
  lazyload: true,
  nav: false,
  mouseDrag: true,
  loop: true,
  controls: false,
};
class Home extends Component {
  onGoTo = (dir) => this.ts.slider.goTo(dir);
  render() {
    return (
      <div className="page-content-wrapper">
        <TinySlider
          className="tiny-slider-one-wrapper"
          settings={settings}
          ref={(ts) => (this.ts = ts)}
        >
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
        </TinySlider>
        <div>
          <button
            style={{ float: "right" }}
            className="btn m-1 btn-outline-primary"
            type="button"
            onClick={() => this.onGoTo("prev")}
          >
            <i class="bi bi-caret-right" />
          </button>
          <button
            style={{ float: "right" }}
            className="btn m-1 btn-outline-primary"
            type="button"
            onClick={() => this.onGoTo("next")}
          >
            <i class="bi bi-caret-left" />
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
