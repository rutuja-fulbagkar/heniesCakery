import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Counter } from "./Counter";
import { AboutUs } from "./AboutUs";
import { Products } from "./Products";
import { Review } from "./Review";

const Landing = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    fade: true,
  };

  const carouselItems = [
    {
      imgSrc: "assets/img/banner/11.jpg",
      title: "Welcome to Our Cakery",
      subtitle: "Where Every Bite is a Delight",
      description:
        "Indulge in the finest baked goods crafted with love and passion. From classic pastries to artisanal breads, experience the taste of quality and tradition in every bite.",
      btnText: "Read More",
      btnLink: "#",
    },
    {
      imgSrc: "assets/img/banner/22.jpg",
      title: "Freshly Baked Every Day",
      subtitle: "The Taste of Homemade Goodness",
      description:
        "Discover our wide range of delicious baked goods made from the finest ingredients. Enjoy the warmth and comfort of freshly baked treats, crafted with love and expertise.",
      btnText: "Read More",
      btnLink: "#",
    },
    {
      imgSrc: "assets/img/banner/33.jpg",
      title: "Delightful Bakes",
      subtitle: "Freshly Baked, Just for You",
      description:
        "Indulge in our selection of freshly baked cakes and cookies, made with the highest quality ingredients. Taste the difference of homemade goodness in every bite.",
      btnText: "Read More",
      btnLink: "#",
    },
  ];

  const team = [
    {
      name: "Henisha Sherdiwala",
      role: "Chef",
      image: "assets/img/team/1.jpg",
    },
    {
      name: "Kajal Sherdiwala",
      role: "Inspriration Of Henie's Cakery.",
      image: "assets/img/team/2.jpg",
    },
    {
      name: "Dhruti Rangoonwala ",
      role: "Inspriration Of Henie's Cakery.",
      image: "assets/img/team/5.jpg",
    },

    {
      name: "Dhruvish Sherdiwala",
      role: "Supportive Partners",
      image: "assets/img/team/4.jpg",
    },
    {
      name: "Lekhan Rangoonwala",
      role: "Supportive Partners",
      image: "assets/img/team/3.jpg",
    },
  ];
  return (
    <>
      <div
        className="container-fluid p-0 pb-5 wow fadeIn w-100"
        data-wow-delay="0.1s"
      >
        <Slider
          {...settings}
          className="owl-carousel header-carousel position-relative w-100"
        >
          {carouselItems.map((item, index) => (
            <div key={index} className="owl-carousel-item position-relative">
              <img className="img-fluid" src={item.imgSrc} alt={item.title} />
              <div className="owl-carousel-inner">
                <div className="container">
                  <div className="row justify-content-start">
                    <div className="col-lg-8">
                      <p className="text-primary text-uppercase fw-bold mb-2">
                        {item.subtitle}
                      </p>
                      <h1 className="display-1 text-light mb-4 animated slideInDown">
                        {item.title}
                      </h1>
                      <p className="text-light fs-5 mb-4 pb-3">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="container-xxl py-6">
        <div className="container">
          <div className="row g-5">
            <Counter />
          </div>
        </div>
      </div>
      <div className="container-xxl py-5 pt-0">
        <div className="container">
          <div className="row g-5">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className="ccontainer-xxl py-5 pt-0">
        <Products />
      </div>

      <div className="container-xxl py-0 pb-0">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="text-primary text-uppercase mb-2">Our Team</p>
            <h1 className="display-6 mb-4">
              We're Super Professional At Our Skills
            </h1>
          </div>
          {/* <div className="row g-4">
            {team.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item text-center rounded overflow-hidden">
                  <img className="img-fluid" src={item.image} alt="" />
                  <div className="team-text">
                    <div className=""></div>
                    <div className="team-social team-title">
                      <h5>{item.name}</h5>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
          <div className="container">
            <div className="row justify-content-center mb-4">
              {team.length > 0 && (
                <div
                  key={0}
                  className="col-lg-3 col-md-4 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <img className="img-fluid" src={team[0].image} alt="" />
                    <div className="team-text">
                      <div className=""></div>
                      <div className="team-social team-title">
                        <h5>{team[0].name}</h5>
                        <span>{team[0].role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="row g-4">
              {team.slice(1).map((item, index) => (
                <div
                  key={index + 1}
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="team-item text-center rounded overflow-hidden">
                    <img className="img-fluid" src={item.image} alt="" />
                    <div className="team-text">
                      <div className=""></div>
                      <div className="team-social team-title">
                        <h5>{item.name}</h5>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-4">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="text-primary text-uppercase mb-2">Our Services</p>
              <h1 className="display-6 mb-4">What Do We Offer For You?</h1>
              <p className="mb-5">
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
                    src="assets/img/landing/11.jpg"
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

      <Review />
    </>
  );
};

export default Landing;
