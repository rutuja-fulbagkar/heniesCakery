import React from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../header/Header";

const Navbar = () => {
  return (
    <>
      <Header />
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a href="/" className="navbar-brand ms-4 ms-lg-0">
          <img src="assets/img/logo/1.png" title="Logo" width={100} />
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/service" className="nav-item nav-link">
              Sevices
            </NavLink>
            <NavLink to="/product" className="nav-item nav-link">
              Products
            </NavLink>
            <NavLink to="/about-us" className="nav-item nav-link">
              About Us
            </NavLink>

            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <NavLink to="/our-team" className="dropdown-item">
                  Our Team
                </NavLink>
              </div>
            </div> */}
            <NavLink to="/contact-us" className="nav-item nav-link">
              Contact Us
            </NavLink>
            <NavLink to="/feedback" className="nav-item nav-link">
              Feedback
            </NavLink>
          </div>
          <a href="tel:+9190165-12120" className="link-with-hover">
            <div className=" d-none d-lg-flex">
              <div className="flex-shrink-0 btn-lg-square border border-light rounded-circle">
                {/* <i className="fa fa-phone text-primary "></i> */}
                <div className="icons whatsapp p-4 py-6 w-100">
                  <i className="fab fa-whatsapp fs-3"></i>
                </div>
              </div>

              <div className="ps-3">
                <small className="text-primary mb-0">Call Us</small>
                <p className="text-light fs-5 mb-0"> +91 90165-12120</p>
              </div>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
