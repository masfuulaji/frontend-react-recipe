import React, { Component } from "react";
import { Link } from "react-router-dom";

class Offcanvas extends Component {
  render() {
    return <div className="offcanvas offcanvas-start" id="affanOffcanvas" data-bs-scroll="true" tabIndex="-1" aria-labelledby="affanOffcanvsLabel">
    <button className="btn-close btn-close-white text-reset" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    <div className="offcanvas-body p-0">
       {/* Side Nav Wrapper  */}
      <div className="sidenav-wrapper">
         {/* Sidenav Profile  */}
        <div className="sidenav-profile bg-gradient">
          <div className="sidenav-style1"></div>
           {/* User Thumbnail  */}
          <div className="user-profile"><img src="/assets/img/bg-img/2.jpg" alt=""/></div>
           {/* User Info  */}
          <div className="user-info">
            <h6 className="user-name mb-0">Affan Islam</h6><span>CEO, Designing World</span>
          </div>
        </div>
         {/* Sidenav Nav  */}
        <ul className="sidenav-nav ps-0">
          {/* <li><a href="page-home.html"><i className="bi bi-house-door"></i>Home</a></li> */}
          <li><Link to="/"><i className="bi bi-house-door"></i>Home</Link></li>
          <li><a href="elements.html"><i className="bi bi-folder2-open"></i>Elements<span className="badge bg-danger rounded-pill ms-2">220+</span></a></li>
          <li><a href="pages.html"><i className="bi bi-collection"></i>Pages<span className="badge bg-success rounded-pill ms-2">100+</span></a></li>
          <li><a href="#"><i className="bi bi-cart-check"></i>Shop</a>
            <ul>
              <li><a href="page-shop-grid.html">Shop Grid</a></li>
              <li><a href="page-shop-list.html">Shop List</a></li>
              <li><a href="page-shop-details.html">Shop Details</a></li>
              <li><a href="page-cart.html">Cart</a></li>
              <li><a href="page-checkout.html">Checkout</a></li>
            </ul>
          </li>
          <li><a href="settings.html"><i className="bi bi-gear"></i>Settings</a></li>
          <li>
            <div className="night-mode-nav"><i className="bi bi-moon"></i>Night Mode
              <div className="form-check form-switch">
                <input className="form-check-input form-check-success" id="darkSwitch" type="checkbox"/>
              </div>
            </div>
          </li>
          <li><a href="page-login.html"><i className="bi bi-box-arrow-right"></i>Logout</a></li>
        </ul>
         {/* Social Info  */}
        <div className="social-info-wrap"><a href="#"><i className="bi bi-facebook"></i></a><a href="#"><i className="bi bi-twitter"></i></a><a href="#"><i className="bi bi-linkedin"></i></a></div>
         {/* Copyright Info  */}
        <div className="copyright-info">
          <p>2021 &copy; Made by<a href="#">Designing World</a></p>
        </div>
      </div>
    </div>
  </div>;
  }
}

export default Offcanvas;
