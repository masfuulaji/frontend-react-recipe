import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header-area" id="headerArea">
        <div className="container">
          {/* # Paste your Header Content from here */}
          {/* # Header Five Layout */}
          {/* # Copy the code from here ... */}
          {/* Header Content */}
          <div className="header-content header-style-five position-relative d-flex align-items-center justify-content-between">
            {/* Logo Wrapper */}
            <div className="logo-wrapper">
              <Link to="/">
                <img src="/assets/img/core-img/logo.png" alt="" />
              </Link>
            </div>
            {/* Navbar Toggler */}
            <div
              className="navbar--toggler"
              id="affanNavbarToggler"
              data-bs-toggle="offcanvas"
              data-bs-target="#affanOffcanvas"
              aria-controls="affanOffcanvas"
            >
              <span className="d-block"></span>
              <span className="d-block"></span>
              <span className="d-block"></span>
            </div>
          </div>
          {/* # Header Five Layout End */}
        </div>
      </div>
    );
  }
}

export default Header;
