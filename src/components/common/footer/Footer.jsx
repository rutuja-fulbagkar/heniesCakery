import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const products = [
    {
      title: "Cupcakes",
      src: "assets/img/products/Cupcake.jpg",
      subTitle:
        "Delight in our moist and flavourful cupcakes, available in a range of tempting flavours.",
    },

    {
      title: "Macarons",
      src: "assets/img/products/Macroons.jpg",
      subTitle:
        "Treat yourself to our delicate and colourful macarons, a French-inspired delight.",
    },
    {
      title: "Brookies",
      src: "assets/img/products/Brookies.jpg",
      subTitle:
        "Experience the rich flavours of our egg-free blondies, a perfect treat for any sweet tooth.",
    },

    {
      title: "Donuts",
      src: "assets/img/products/Donuts.jpg",
      subTitle:
        "Savour our freshly baked donuts, available in a selection of delicious glazes and toppings.",
    },
    {
      title: "Customisable Cakes",
      src: "assets/img/products/Cake.jpg",
      subTitle:
        "Create your dream cake with our customisable options, tailored to suit your preferences and celebrations.",
    },
    {
      title: "Cheesecakes",
      src: "assets/img/products/Cheesecake.jpg",
      subTitle:
        "Dive into creamy, egg-free cheesecakes in various flavours, sure to satisfy dessert lovers.",
    },
  ];
  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer my-6 mb-0 py-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h4 className="text-light mb-4">Office Address</h4>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i> Vesu, Surat,
                Gujarat. 395007
              </p>
              <p className="mb-2">
                <a href="tel:+91 90165-12120">
                  <i className="fa fa-phone me-3"></i>+91 90165-12120
                </a>
              </p>
              <p className="mb-2">
                <a href="mailto:heniescakery@gmail.com">
                  <i className="fa fa-envelope me-3"></i>heniescakery@gmail.com
                </a>
              </p>
              <div className="d-flex pt-2">
                <a
                  className="btn btn-square btn-outline-dark rounded-circle me-1"
                  href="https://www.facebook.com/profile.php?id=61561478279324&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <div className="icons facebook p-4 me-4 w-100">
                    {" "}
                    <i className="fab fa-facebook-f "></i>
                  </div>
                </a>

                <a
                  className="btn btn-square btn-outline-dark rounded-circle me-3"
                  href="https://www.instagram.com/henies.cakery_?igsh=NjFpbXJjbmhzYXds&utm_source=qr"
                  target="_blank"
                >
                  <div className="icons instagram p-4 py-6 w-100">
                    <i className="fab fa-instagram "></i>
                  </div>
                </a>
                <a
                  className="btn btn-square btn-outline-dark rounded-circle me-0"
                  href="tel:+9190165-12120"
                >
                  <div className="icons whatsapp p-4 py-6 w-100">
                    <i className="fab fa-whatsapp fs-3 "></i>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h4 className="text-light mb-4">Quick Links</h4>
              <NavLink to="/about-us" className="btn btn-link">
                About Us
              </NavLink>
              <NavLink to="/contact-us" className="btn btn-link">
                Contact Us
              </NavLink>
              <NavLink to="/service" className="btn btn-link">
                Our Services
              </NavLink>
              <NavLink to="/product" className="btn btn-link">
                Our Products
              </NavLink>
              <NavLink to="/privacy-policy" className="btn btn-link">
                Privacy Policy
              </NavLink>
            </div>

            <div className="col-lg-4 col-md-6">
              <h4 className="text-light mb-4">Photo Gallery</h4>
              <div className="row g-2">
                {products.map((item, index) => (
                  <div className="col-4" key={index}>
                    <img
                      className="img-fluid bg-light rounded p-1"
                      src={item.src}
                      alt="Image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid copyright text-light py-4 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a href="https://heniescakery.com/">Henie's Cakery</a>, All
              Rights Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a href="https://www.yashworldproducts.com/">
                Yashworld Products Privited Limited
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
