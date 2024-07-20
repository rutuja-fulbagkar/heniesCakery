import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToUp/ScrollToUp";
import { ReviewFirebase } from "./components/pages/ReviewFirebase/ReviewFirebase";
import Swal from "sweetalert2";

const Landing = lazy(() => import("./components/pages/landing/Landing"));
const PageNotFound = lazy(() =>
  import("./components/common/pageNotFound/PageNotFound")
);
const Contact = lazy(() => import("./components/pages/contact/Contact"));
const Footer = lazy(() => import("./components/common/footer/Footer"));
const Navbar = lazy(() => import("./components/common/navbar/Navbar"));
const Services = lazy(() => import("./components/pages/services/Services"));
const About = lazy(() => import("./components/pages/about/About"));
const Product = lazy(() => import("./components/pages/product/Product"));
const ThankYou = lazy(() => import("./components/common/thankyou/ThankYou"));

const Layout = () => {
  const pathname = useLocation();
  const navigate = useNavigate();

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

  const selectedOptions =
    JSON.parse(localStorage.getItem("selectedOptions")) || {};
  const selectedTitle = JSON.parse(localStorage.getItem("selectedTitle")) || {};
  const customQuntity = JSON.parse(localStorage.getItem("customQuntity")) || {};

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

  const handleEnquiryNow = () => {
    navigate("/contact-us", {
      state: { selectedOptions, selectedTitle, customQuntity },
    });
  };

  useEffect(() => {
    if (pathname.pathname && JSON.parse(localStorage.getItem("show-popUp"))) {
      if (pathname.pathname == "/contact-us") {
        handleEnquiryNow();
      }
      Swal.fire({
        title: " You have Selected ",
        html: formattedHtml,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Do Enquiry !",
      }).then((result) => {
        if (result.isConfirmed) {
          handleEnquiryNow();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          navigate(pathname.pathname);
          localStorage.setItem("show-popUp", false);
        }
      });
    }
  }, [JSON.parse(localStorage.getItem("show-popUp")), pathname.pathname]);

  return (
    <>
      <ScrollToTop />
      <Suspense
        fallback={
          <div className="">{/* <p>Loading Please Wait ...</p> */}</div>
        }
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
          <Route exact path="/product" element={<Product />} />
          <Route path="/service" element={<Services />} />
          <Route path="/privacy-policy" element={<ThankYou />} />
          <Route path="/feedback" element={<ReviewFirebase />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default Layout;
