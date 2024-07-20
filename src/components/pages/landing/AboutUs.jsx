import React from "react";

export const AboutUs = () => {
  return (
    <>
      <div className="container-xxl py-0">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
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
                    src="assets/img/landing/22.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <p className="text-primary text-uppercase mb-2">About Us</p>
                <h1 className="display-6 mb-4">
                  We Bake Every Item From The Core Of Our Hearts
                </h1>
                <p className="justify">
                  Welcome to Henies Cakey, where every creation is crafted with
                  love and dedication. Established in 2022 as The Happy Jar and
                  now revitalized in 2024, we specialize in delicious, egg-free
                  baked goods served fresh every day. After studying in Canada
                  and honing my skills, I am excited to bring my passion for
                  baking back to India through a cloud kitchen model and online
                  presence on Swiggy and Zomato.
                </p>
                <p className="justify">
                  At Henies Cakey, quality is our top priority. Each product is
                  meticulously tested and prepared to ensure a delightful
                  experience for our customers. Whether you're craving cookies,
                  customizable cakes, or indulgent cheesecakes, every bite from
                  Henies Cakey promises freshness and flavor.
                </p>
                <div className="row g-2 mb-4">
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Quality
                    Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Custom
                    Products
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Online
                    Order
                  </div>
                  <div className="col-sm-6">
                    <i className="fa fa-check text-primary me-2"></i>Home
                    Delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
