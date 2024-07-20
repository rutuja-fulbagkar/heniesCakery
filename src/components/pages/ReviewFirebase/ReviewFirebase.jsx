import React, { useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { getDatabase, set, push, ref } from "firebase/database";
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { app } from "../../Firebase/Firebase";
// import { v4 } from "uuid";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const ReviewFirebase = () => {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    contactNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Invalid contact number")
      .required("Contact number is required"),
    message: Yup.string().required("Message is required"),
  });

  const [onFirebaseAuth, setOnFirebaseAuth] = useState(" ");

  const storage = getStorage(app);
  const db = getDatabase(app);
  const auth = getAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data, event) => {
    event.preventDefault();
    const imageFile = event.target.image.files[0];

    let imageUrl = "";

    if (imageFile) {
      try {
        // Upload image to Firebase Storage
        const storageRefImg = storageRef(storage, `images/${imageFile.name}`);

        await uploadBytes(storageRefImg, imageFile);

        // Get image URL from Firebase Storage
        imageUrl = await getDownloadURL(storageRefImg);
      } catch (error) {
        console.error("Error uploading image or getting URL:", error);
        // Handle error appropriately, such as displaying a message to the user
        return;
      }
    } else {
      // Use default image URL or path if no image is uploaded
      imageUrl = "assets/img/review/review.jpg";
    }

    // Save feedback data including image URL to Firebase Realtime Database
    const newData = { ...data, imageUrl, uid: onFirebaseAuth };
    const newEnquiryRef = push(ref(db, "feedback"));
    set(newEnquiryRef, newData).then(() => {
      Swal.fire({
        titleText: "Thank you for submitting your Feedback.",
        text: "We will get back to you shortly.",
        imageUrl: "assets/img/logo/0.jpg",
        showConfirmButton: false,
        timer: 13000,
        showCloseButton: true,
      }).then(() => {
        reset();
        navigate("/");
      });
    });
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
            Feedback
          </h1>
        </div>
      </div>
      <div className="container-xxl py-4">
        <div className="container mt-0">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="text-primary text-uppercase mb-2">
              We Value Your Opinion!
            </p>
            <h1 className="display-6 mb-4">
              Your feedback is crucial for us to bake the best cakes and provide
              excellent service.
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

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className={`form-control ${
                          errors.message ? "is-invalid" : ""
                        }`}
                        placeholder="Leave a review here"
                        id="message"
                        style={{ height: "200px" }}
                        {...register("message")}
                      ></textarea>
                      <label htmlFor="message">Leave a review here</label>
                      <div className="invalid-feedback">
                        {errors.message?.message}
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        {...register("image")}
                      />
                      <label htmlFor="image">Upload Image</label>
                    </div>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      className="btn btn-primary rounded-pill py-3 px-5"
                      type="submit"
                    >
                      Send Feedback
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
