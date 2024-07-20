import React from "react";

export const Products = () => {
  return (
    <>
      <div className="container-xxl bg-light my-6 py-6 pt-0">
        <div className="container">
          <div
            className="bg-primary text-light rounded-bottom p-2 my-6 mt-0 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            {/* <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 text-light mb-0">
                  The Best Bakery In Your City
                </h1>
              </div>
              <div className="col-lg-6 text-lg-end">
                <div className="d-inline-flex align-items-center text-start">
                  <i className="fa fa-phone-alt fa-4x flex-shrink-0"></i>
                  <div className="ms-4">
                    <p className="fs-5 fw-bold mb-0">Call Us</p>
                    <p className="fs-1 fw-bold mb-0">+012 345 6789</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="text-primary text-uppercase mb-2">Bakery Products</p>
            <h1 className="display-6 mb-4">
              Explore The Categories Of Our Bakery Products
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                  <h3 className="mb-3">Customisable Cakes</h3>
                  <span>
                    Create your dream cake with our customisable options,
                    tailored to suit your preferences and celebrations.
                  </span>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="assets/img/products/Cake.jpg"
                    alt=""
                  />
                  <div className="product-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href="/product"
                    >
                      <i className="fa fa-eye text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                  <h3 className="mb-3">Cupcakes</h3>
                  <span>
                    Delight in our moist and flavourful cupcakes, available in a
                    range of tempting flavours.
                  </span>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="assets/img/products/Cupcake.jpg"
                    href="/product"
                  />
                  <div className="product-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href="/product"
                    >
                      <i className="fa fa-eye text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                <div className="text-center p-4">
                  <h4 className="mb-3">Macarons</h4>
                  <span>
                    Treat yourself to our delicate and colourful macarons, a
                    French-inspired delight.
                  </span>
                </div>
                <div className="position-relative mt-auto">
                  <img
                    className="img-fluid"
                    src="assets/img/products/Macroons.jpg"
                    alt=""
                  />
                  <div className="product-overlay">
                    <a
                      className="btn btn-lg-square btn-outline-light rounded-circle"
                      href="/product"
                    >
                      <i className="fa fa-eye text-primary"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="text-center mx-auto mb-0 mt-5 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <a
                className="btn btn-primary rounded-pill py-3 px-5"
                href="/contact-us"
              >
                Enquiry Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
