import React from "react";

export const Header = () => {
  return (
    <>
      <div
        className="container-fluid top-bar bg-dark text-light px-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row gx-0 align-items-center d-none d-lg-flex">
          <div className="col-lg-6 px-5 text-start">
            <ol className="breadcrumb mb-0">
              {/* <li className="breadcrumb-item">
                <a className="small text-light" href="#">
                  Privacy Policy
                </a>
              </li> */}
            </ol>
          </div>
          <div className="col-lg-6 px-5 text-end">
            <small className="me-4">Follow us :</small>
            <div className="h-100 d-inline-flex align-items-center">
              {/* <a
                className="btn-lg-square text-primary border-end rounded-0"
                href="https://www.facebook.com/profile.php?id=61561478279324&mibextid=LQQJ4d"
                target="_blank"
              >
                <i className="fab fa-facebook-f "></i>
              </a> */}
              {/* <a
                className="btn-lg-square text-primary pe-0"
                href="https://www.instagram.com/henies.cakery_?igsh=NjFpbXJjbmhzYXds&utm_source=qr"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a> */}
              <span className="btn-lg-square  border-end rounded-0 me-2">
                <a
                  className="btn btn-square btn-outline-dark rounded-circle me-2"
                  href="https://www.facebook.com/profile.php?id=61561478279324&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <div className=" icons facebook p-4 py-6 me-3 w-50">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </a>
              </span>
              <a
                className="btn btn-square btn-outline-dark rounded-circle m-2"
                href="https://www.instagram.com/henies.cakery_?igsh=NjFpbXJjbmhzYXds&utm_source=qr"
                target="_blank"
              >
                <div className=" icons instagram p-4  me-0  w-50">
                  <i className="fab fa-instagram "></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
