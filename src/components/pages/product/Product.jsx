import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Product.css";
import Swal from "sweetalert2";

const Product = () => {
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({});
  const [selectedTitle, setSelectedTitle] = useState({});
  const [customQuntity, setCustomQuntity] = useState({});
  const [showButton, setShowButton] = useState(false);

  const handleDropdownChange = (event, index) => {
    const { value } = event.target;
    setSelectedOptions((prevState) => ({
      ...prevState,
      [index]: value,
    }));

    setSelectedTitle((prevState) => ({
      ...prevState,
      [index]: products[index].title,
    }));
  };

  const handleCustomQuantity = (event, index) => {
    const { value } = event.target;

    setCustomQuntity((prevState) => ({
      ...prevState,
      [index]: value,
    }));
  };
  const products = [
    {
      title: "Cupcakes",
      src: "assets/img/products/Cupcake.jpg",
      subTitle:
        "Delight in our moist and flavourful cupcakes, available in a range of tempting flavours.",
      isPieces: true,
    },
    {
      title: "Cookies",
      src: "assets/img/products/Cookies.jpg",
      subTitle:
        "Enjoy a variety of egg-free cookies, perfect for any occasion.",
    },
    {
      title: "Brownies",
      src: "assets/img/products/Brownies.jpg",
      subTitle: "Deliciously Rich and Fudgy",
    },

    {
      title: "Customisable Cakes",
      src: "assets/img/products/Cake.jpg",
      subTitle:
        "Create your dream cake with our customisable options, tailored to suit your preferences and celebrations.",
    },
    {
      title: "Brookies",
      src: "assets/img/products/Brookies.jpg",
      subTitle:
        "Experience the rich flavours of our egg-free blondies, a perfect treat for any sweet tooth.",
    },
    {
      title: "Blondies",
      src: "assets/img/products/blondies.jpg",
      subTitle:
        "Experience the rich flavours of our egg-free blondies, a perfect treat for any sweet tooth.",
      isPieces: true,
    },
    {
      title: "Donuts",
      src: "assets/img/products/Donuts.jpg",
      subTitle:
        "Savour our freshly baked donuts, available in a selection of delicious glazes and toppings.",
      isPieces: true,
    },
    {
      title: "Macarons",
      src: "assets/img/products/Macroons.jpg",
      subTitle:
        "Treat yourself to our delicate and colourful macarons, a French-inspired delight.",
      isPieces: true,
    },
    {
      title: "Cheesecakes",
      src: "assets/img/products/Cheesecake.jpg",
      subTitle:
        "Dive into creamy, egg-free cheesecakes in various flavours, sure to satisfy dessert lovers.",
      isPieces: true,
    },
  ];
  const handleEnquiryNow = () => {
    navigate("/contact-us", {
      state: { selectedOptions, selectedTitle, customQuntity },
    });
  };
  localStorage.setItem("selectedOptions", JSON.stringify(selectedOptions));
  localStorage.setItem("selectedTitle", JSON.stringify(selectedTitle));
  localStorage.setItem("customQuntity", JSON.stringify(customQuntity));

  const createFormattedList = (options, titles, customQty) => {
    if (!options || !titles) return [];

    return Object.keys(options).map((key) => {
      let optionText = `${titles[key]}: ${options[key]}`;
      if (
        ["other", "others"].includes(options[key].toLowerCase()) &&
        customQty[key]
      ) {
        optionText += ` - ${customQty[key]}`;
      }
      return optionText;
    });
  };

  const formattedHtml = `
  <div>
   
    <ul className="form-control bg-light border-0" id="selectedOptions">
      ${createFormattedList(selectedOptions, selectedTitle, customQuntity)
        .map((item) => `<li>${item}</li>`)
        .join("")}
    </ul>
    <b> Would you like to place enquiry ?</b>
  </div>
`;

  useEffect(() => {
    if (Object.values(selectedOptions).some((option) => option !== "")) {
      localStorage.setItem("show-popUp", true);

      setShowButton(true);
    } else {
      localStorage.setItem("show-popUp", false);
      setShowButton(false);
    }
  }, [selectedOptions]);

  return (
    <div>
      <div
        className="container-fluid page-header py-6 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center pt-5 pb-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Products
          </h1>
        </div>
      </div>
      <div className="container-xxl bg-light my-3 py-5 pt-0">
        <div className="container">
          <div
            className="bg-primary text-light rounded-bottom p-2 my-5 mt-0 wow fadeInUp"
            data-wow-delay="0.1s"
          ></div>
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
            {products.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="product-item d-flex flex-column bg-white rounded overflow-hidden h-100">
                  <div className="text-center p-4">
                    <h3 className="mb-3">{item.title}</h3>
                    <span>{item.subTitle}</span>
                  </div>
                  <div className="position-relative mt-auto">
                    <img className="img-fluid" src={item.src} alt="" />

                    <div
                      className="text-center mx-auto mb-5 mt-5 wow fadeInUp"
                      data-wow-delay="0.1s"
                    >
                      {!item.isPieces && (
                        <>
                          <select
                            className="btn btn-primary py-2 px-3 my-2 p-2 mt-2"
                            onChange={(event) =>
                              handleDropdownChange(event, index)
                            }
                          >
                            <option value="">Select</option>
                            <option value="250 gm">250 gm</option>
                            <option value="500 gm">500 gm</option>
                            <option value="750 gm">750 gm</option>
                            <option value="1 kg">1 kg</option>
                            <option value="Other">Other</option>
                          </select>

                          {selectedOptions[index] === "Other" && (
                            <div className="res-cust-input">
                              <input
                                className="btn btn-primary py-2 px-3 my-2 p-1 mt-2 m-2"
                                type="text"
                                placeholder="Enter custom quantity"
                                onChange={(event) =>
                                  handleCustomQuantity(event, index)
                                }
                              />
                            </div>
                          )}
                        </>
                      )}
                      {/*  */}

                      {/* pieces */}
                      {item.isPieces && (
                        <select
                          className="btn btn-primary py-2 px-3 my-2 p-2 mt-2"
                          onChange={(event) =>
                            handleDropdownChange(event, index)
                          }
                        >
                          <option value="">Select</option>
                          <option value="6 piece">6 Piece</option>
                          <option value="12 pieces">12 Pieces</option>
                          <option value="18 pieces">18 Pieces</option>
                          <option value="Others">Other</option>
                        </select>
                      )}
                      {item.isPieces && selectedOptions[index] === "Others" && (
                        <div className="res-cust-input">
                          <input
                            className="btn btn-primary py-2 px-3 my-2 p-1 mt-2 m-2"
                            type="text"
                            placeholder="Enter quantity"
                            onChange={(event) =>
                              handleCustomQuantity(event, index)
                            }
                          />
                        </div>
                      )}
                      {/* end */}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div
              className="text-center mx-auto mb-0 mt-5 wow fadeInUp float-container"
              data-wow-delay="0.1s"
            >
              <>
                {showButton && (
                  <div>
                    {/* <img
                      src="assets/img/click.gif"
                      alt="Click this button after selecting a product"
                      className="m-3"
                    /> */}{" "}
                    <button
                      className="btn btn-primary rounded-pill py-3 px-5 animate-button button"
                      onClick={(event) => {
                        event.preventDefault();
                        handleEnquiryNow();
                      }}
                    >
                      Enquiry Now
                    </button>
                  </div>
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
