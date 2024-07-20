import React from "react";
import { Counter } from "../landing/Counter";

const Services = () => {
  return (
    <>
      <div
        className="container-fluid page-header py-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center pt-5 pb-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Services
          </h1>
        </div>
      </div>
      <Counter />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="text-primary text-uppercase mb-2">Our Services</p>
              <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
              <p className="mb-5 justify">
                Our delicious, egg-free baked goods are perfect for those with
                dietary restrictions or preferences. Enjoy the same great
                flavors without worrying about eggs.
              </p>
              <div className="row gy-5 gx-4">
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                      <i className="fa fa-bread-slice text-white"></i>
                    </div>
                    <h5 className="mb-0">Quality Products</h5>
                  </div>
                  <p className="justify">
                    At Henies Cakery, we believe in delivering the best. Our
                    baked goods are made with high-quality ingredients and
                    crafted with meticulous care. Each product is freshly baked
                    and tested to ensure it meets our high standards of taste
                    and quality.
                  </p>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.2s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                      <i className="fa fa-birthday-cake text-white"></i>
                    </div>
                    <h5 className="mb-0">Custom Products</h5>
                  </div>
                  <p className="justify">
                    Your special moments deserve unique treats. We offer
                    customizable cakes and other baked goods tailored to your
                    preferences. Whether it's a birthday, wedding, or any
                    celebration, our custom products are designed to make your
                    occasion memorable.
                  </p>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                      <i className="fa fa-cart-plus text-white"></i>
                    </div>
                    <h5 className="mb-0">Online Order</h5>
                  </div>
                  <p className="justify">
                    Convenience at your fingertips! Order your favorite treats
                    online through Swiggy and Zomato. Our user-friendly platform
                    makes it easy to browse, select, and receive your delicious
                    baked goods right at your doorstep.
                  </p>
                </div>
                <div className="col-sm-6 wow fadeIn" data-wow-delay="0.4s">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0 btn-square bg-primary rounded-circle me-3">
                      <i className="fa fa-leaf text-white"></i>
                    </div>
                    <h5 className="mb-0">Egg-Free Products</h5>
                  </div>
                  <p className="justify">
                    We take pride in offering a range of completely egg-free
                    products. Our recipes are crafted to ensure that you don't
                    have to compromise on taste or quality, making our baked
                    goods perfect for those with dietary restrictions or
                    preferences.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="row img-twice position-relative h-100">
                <div className="col-6">
                  <img
                    className="img-fluid rounded"
                    src="assets/img/landing/1.jpg"
                    alt=""
                  />
                </div>
                <div className="col-6 align-self-end">
                  <img
                    className="img-fluid rounded"
                    src="assets/img/landing/2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
