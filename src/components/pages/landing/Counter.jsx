import React, { useEffect, useState } from "react";
import $ from "jquery";

export const Counter = () => {
  const [facts, setFacts] = useState([
    {
      icon: "fa-cake-candles",
      delay: "0.4s",
      title: "Cakes Delivered",
      kg: 69.75,
      exactValue: 69.75,
    },
    {
      icon: "fa-bread-slice",
      delay: "0.6s",
      title: "Brownies Delivered",
      kg: 72.5,
      exactValue: 72.5,
    },
    {
      icon: "fa-cookie-bite",
      delay: "0.8s",
      title: "Cookies Delivered",
      kg: 92,
      exactValue: 92,
    },
  ]);

  useEffect(() => {
    const animateCounter = () => {
      $(".counter").each(function () {
        let $this = $(this);
        let initialKg = parseFloat($this.attr("data-initial"));
        let exactValue = parseFloat($this.attr("data-exact"));

        $({ countNum: 0 }).animate(
          { countNum: initialKg },
          {
            duration: 10000,
            easing: "swing",
            step: function () {
              $this.text(formatNumber(Math.floor(this.countNum)) + " kg");
            },
            complete: function () {
              $this.text(formatNumber(this.countNum) + " kg ");
            },
          }
        );
      });
    };

    animateCounter();
  }, []);

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="container-xxl py-0 mt-0 mb-5">
      <div className="container">
        <div className="row g-4">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeIn"
              data-wow-delay={fact.delay}
            >
              <div className="fact-item bg-light rounded text-center h-100 p-5">
                <i className={`fa ${fact.icon} fa-4x text-primary mb-4`}></i>
                <p className="mb-2">{fact.title}</p>
                <h1
                  className="display-5 mb-0 counter"
                  data-initial={fact.kg}
                  data-exact={fact.exactValue}
                >
                  {fact.kg.toFixed(2)} kg
                </h1>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
