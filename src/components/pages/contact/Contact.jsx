import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// firebase
import { getDatabase, ref, set, push } from "firebase/database";
import { app } from "../../Firebase/Firebase";
import { Link, useLocation } from "react-router-dom";
import emailjs from "emailjs-com";
import "./Contact.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const db = getDatabase(app);
const auth = getAuth();

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  contactNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Invalid contact number")
    .required("Contact number is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const location = useLocation();
  // const { selectedOptions, selectedTitle, customQuntity } =
  //   location.state || {};

  const initialSelectedOptions = location.state?.selectedOptions || {};
  const initialSelectedTitle = location.state?.selectedTitle || {};
  const initialCustomQuantity = location.state?.customQuntity || {};

  const [selectedOptions, setSelectedOptions] = useState(
    initialSelectedOptions
  );
  const [selectedTitle, setSelectedTitle] = useState(initialSelectedTitle);
  const [customQuntity, setCustomQuntity] = useState(initialCustomQuantity);
  const [onFirebaseAuth, setOnFirebaseAuth] = useState(" ");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const createFormattedList = (options, titles, customQty) => {
  //   if (!options || !titles) return {};

  //   return Object.keys(options)
  //     .map((key) => {
  //       let optionText = `${titles[key]} : ${options[key]}`;
  //       if (
  //         ["other", "others"].includes(options[key].toLowerCase()) &&
  //         customQty[key]
  //       ) {
  //         optionText += ` - ${customQty[key]}`;
  //       }
  //       return optionText;
  //     })
  //     .join(" , ");
  // };
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

  const onSubmit = (data, event) => {
    event.preventDefault();

    data.selectedOptions = createFormattedList(
      selectedOptions,
      selectedTitle,
      customQuntity
    );
    // .send("service_or9uwlp", "template_lrkpuhc", data, "D4w8jxcGfE7au73XM")
    // .send("service_1ytgiio", "template_kn8l76i", data, "d74UUFzM4_B8xClS7")-testing purpose
    const newEnquiryRef = push(ref(db, "enquiry"));
    set(newEnquiryRef, data).then(() => {
      emailjs
        .send("service_or9uwlp", "template_lrkpuhc", data, "D4w8jxcGfE7au73XM")
        .then(
          (result) => {
            Swal.fire({
              titleText: "Thank you for submitting your enquiry.",
              text: "We will get back to you shortly.",
              imageUrl: "assets/img/logo/0.jpg",
              showConfirmButton: false,
              timer: 1500,
              showCloseButton: true,
            }).then(() => {
              resetFormFields();
            });
          },
          (error) => {
            Swal.fire({
              titleText: "Failed to send your enquiry.",
              text: "Please try again later.",
              icon: "error",
              showConfirmButton: true,
            });
          }
        );
    });
  };

  const resetFormFields = () => {
    reset();
    setSelectedOptions({});
    setSelectedTitle({});
    setCustomQuntity({});
    localStorage.setItem("show-popUp", false);
    localStorage.removeItem("selectedOptions");
    localStorage.removeItem("selectedTitle");
    localStorage.removeItem("customQuntity");
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setOnFirebaseAuth(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <div
        className="container-fluid page-header py-6 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center pt-5 pb-3">
          <h1 className="display-4 text-white animated slideInDown mb-3">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="container-xxl py-4">
        <div className="container mt-0">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="text-primary text-uppercase mb-2">Contact Us</p>
            <h1 className="display-6 mb-4">
              If You Have Any Query, Please Contact Us
            </h1>
          </div>
          <div className="row g-0 justify-content-center">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.name ? "is-invalid" : ""
                        }`}
                        id="name"
                        placeholder="Your Name"
                        {...register("name")}
                      />
                      <label htmlFor="name">Your Name</label>
                      <div className="invalid-feedback">
                        {errors.name?.message}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className={`form-control ${
                          errors.email ? "is-invalid" : ""
                        }`}
                        id="email"
                        placeholder="Your Email"
                        {...register("email")}
                      />
                      <label htmlFor="email">Your Email</label>
                      <div className="invalid-feedback">
                        {errors.email?.message}
                      </div>
                    </div>
                  </div>

                  {/* start */}
                  {selectedOptions &&
                  Object.keys(selectedOptions).length > 0 ? (
                    <div className="col-md-12">
                      <div className="form-floating">
                        {/* <input
                          type="text"
                          className="form-control bg-light border-0"
                          id="selectedOptions"
                          value={createFormattedList(
                            selectedOptions,
                            selectedTitle,
                            customQuntity
                          )}
                          readOnly
                        /> */}

                        <div>
                          <label
                            htmlFor="selectedOptions"
                            className="text-primary mb-2"
                          >
                            *You have Selected Options for :
                          </label>
                          <span className="text-color">
                            {selectedTitle
                              ? Object.values(selectedTitle).join(" , ")
                              : ""}
                          </span>
                          <ul
                            className="form-control bg-light border-0"
                            id="selectedOptions"
                            readOnly
                          >
                            {createFormattedList(
                              selectedOptions,
                              selectedTitle,
                              customQuntity
                            ).map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-12">
                      <div className="alert alert-warning mt-3">
                        <p>
                          No options selected. It's not compulsory to select any
                          options, but if you change your mind, you can explore
                          the product options.
                        </p>
                        <Link to="/product" className="btn btn-primary mt-2">
                          Go to Product Page
                        </Link>
                      </div>
                    </div>
                  )}

                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className={`form-control ${
                          errors.contactNumber ? "is-invalid" : ""
                        }`}
                        id="contactNumber"
                        placeholder="Your Contact No."
                        {...register("contactNumber", {
                          required: "Contact number is required",
                          pattern: {
                            value: /^[0-9]{10}$/,
                            message: "Invalid contact number",
                          },
                        })}
                      />
                      <label htmlFor="contactNumber">Your Contact No.</label>
                      <div className="invalid-feedback">
                        {errors.contactNumber?.message}
                      </div>
                    </div>
                  </div>

                  {/*  end*/}

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className={`form-control ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "200px" }}
                        {...register("message")}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                      <div className="invalid-feedback">
                        {errors.message?.message}
                      </div>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      className="btn btn-primary rounded-pill py-3 px-5"
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-xxl py-6 px-0 pb-0 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <iframe
          className="w-100 mb-n2"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.269012732004!2d72.78101097597181!3d21.141689983888874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0537503b1583d%3A0xe53d3fc9f86c8b61!2sVesu!5e0!3m2!1sen!2sin!4v1720162074022!5m2!1sen!2sin"
          allowFullScreen=""
          width="800"
          height="600"
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
