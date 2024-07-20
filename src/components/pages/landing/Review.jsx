import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { StyledSlider } from "./StyledSlider";
import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { app } from "../../Firebase/Firebase";

export const Review = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Maitry ",
      message:
        "Henie's Cakery made my event unforgettable! 🌹 The Customisable Cakes were a masterpiece, both in taste and appearance. 🎂 Every guest was raving about it. Thank you for adding magic to our celebration! ✨ We'll definitely come back for more!",
      imageUrl: "assets/img/review/1.jpg",
    },

    {
      name: "Harsh ",
      message:
        "I had the pleasure of enjoying a Henie's Cakery Donuts at a party, and I was blown away. 🎂 The Donuts** were moist, flavorful, and the design was stunning. I highly recommend them for any celebration! 🎊",
      imageUrl: "assets/img/review/4.jpg",
    },
    {
      name: "Urvish ",
      message:
        "Thank you, Henie's Cakery, for the amazing Macarons for my event! 🎂 The design was exactly what I wanted, and the taste was incredible. We couldn't have asked for a better **Macarons**!",
      imageUrl: "assets/img/review/5.jpg",
    },
    {
      name: "Namashya",
      message:
        "I ordered Brookies for a friend's baby shower, and they were perfect! 👶 The flavors were delightful and the decorations were adorable. 🧁 Thank you, Henie's Cakery, for making the event so sweet and special! 🌸",
      imageUrl: "assets/img/review/2.jpg",
    },
    {
      name: "Shlok ",
      message:
        "I recently ordered a Cheesecakes from Henie's Cakery for a celebration, and it was perfect! 🎉 The Cheesecakes was delicious and beautifully decorated. Thank you for making the day extra special! 🎂",
      imageUrl: "assets/img/review/6.jpg",
    },
    {
      name: "Nikita",
      message:
        "Henie's Cakery has become my go-to for any occasion. 🎉 Their Blondies are consistently delicious and beautifully crafted. 🎂 Recently, I ordered one for a special celebration, and it was a hit!",
      imageUrl: "assets/img/review/3.jpg",
    },
    {
      name: "Nita",
      message:
        "Henie's Cakery never disappoints! Their Cupcakes are always top-notch in taste and design. I ordered one for a family gathering, and everyone loved it. Thank you for the consistent quality! 🌟",
      imageUrl: "assets/img/review/7.jpg",
    },

    {
      name: "Neel",
      message:
        "Thank you, Henie's Cakery, for the incredible cake! 🎂 It was the highlight of our office party. Everyone loved the taste and the beautiful design. We'll be ordering again for our next event! 👏",
      imageUrl: "assets/img/review/9.jpg",
    },
    {
      name: "Vidhi",
      message:
        "Henie's Cakery made my event extra special with their amazing cake. 🎂 The flavor was fantastic, and the design was exactly what we wanted. Thank you for the wonderful cake! 🎉",
      imageUrl: "assets/img/review/10.jpg",
    },
    {
      name: "Twinkle",
      message:
        "I'm so happy with the cake from Henie's Cakery for my special event. 🎂 It was delicious, and the design was perfect. Thank you for making the day so special! We'll definitely be back for more! 🎈",
      imageUrl: "assets/img/review/11.jpg",
    },
    {
      name: "Ami",
      message:
        "Henie's Cakery made the most beautiful and delicious cake for a recent celebration. 🎂 It was exactly what I hoped for, and all our guests loved it. Thank you for the amazing cake! 🌟",
      imageUrl: "assets/img/review/12.jpg",
    },
    {
      name: "Rudrakksh",
      message:
        "I'm so impressed with Henie's Cakery! 🎂 The cake I ordered for a recent celebration was perfect. The design and taste were amazing. Thank you for making our celebration so special! 🎓",
      imageUrl: "assets/img/review/17.jpg",
    },
    {
      name: "Niraj",
      message:
        "The cake from Henie's Cakery was the highlight of our celebration. 💕 It was delicious and beautifully decorated. Thank you for making our day so special! 🎂 We'll be back for more!",
      imageUrl: "assets/img/review/13.jpg",
    },

    {
      name: "Dr. Vyshnavi",
      message:
        "Thank you, Henie's Cakery, for the fantastic cake for our recent event. 🎉 The cake was delicious and looked amazing. It was a big hit with all the guests! We'll definitely be back! 💍",
      imageUrl: "assets/img/review/15.jpg",
    },
    {
      name: "Vijay",
      message:
        "Henie's Cakery did an incredible job on the cake for a recent celebration. 🎂 The design was stunning, and the flavor was out of this world. Thank you for making the day so special! We'll be back! 🎉",
      imageUrl: "assets/img/review/16.jpg",
    },
    {
      name: "Shubh",
      message:
        "I'm beyond impressed with Henie's Cakery! 🎂 The cake I ordered for a friend's celebration was a masterpiece. It was beautifully decorated and tasted divine. We'll definitely be back for more! 👍",
      imageUrl: "assets/img/review/8.jpg",
    },

    {
      name: "Manav",
      message:
        "The cake from Henie's Cakery was the highlight of our event. 💕 It was delicious and beautifully decorated. Thank you for making our day so special! 🎂 We'll be back for more!",
      imageUrl: "assets/img/review/18.jpg",
    },
    {
      name: "Nidhi",
      message:
        "I recently ordered a cake from Henie's Cakery for a special occasion, and it was perfect! 🎂 The cake was delicious and beautifully decorated. Thank you for making the day extra special! 🎉",
      imageUrl: "assets/img/review/19.jpg",
    },
    {
      name: "Adv. Shivam",
      message:
        "Henie's Cakery did an incredible job on the cake for a recent celebration. 🎂 The design was stunning, and the flavor was out of this world. Thank you for making the day so special! We'll be back! 🎉",
      imageUrl: "assets/img/review/20.jpg",
    },
    {
      name: "Dr. Aniket",
      message:
        "I'm so impressed with Henie's Cakery! 🎂 The cake I ordered for a recent party was a huge success. The design and taste were perfect. Thank you for making the event so memorable! 💍",
      imageUrl: "assets/img/review/14.jpg",
    },
    // {
    //   name: "Vaibhav",
    //   message:
    //     "I'm so impressed with Henie's Cakery! 🎂 The cake I ordered for a recent event was perfect. The design and taste were amazing. Thank you for making our celebration so special! 🎓",
    //   imageUrl: "assets/img/review/21.jpg",
    // },
  ]);

  const db = getDatabase(app);

  // useEffect(() => {
  //   const feedbackRef = ref(db, "feedback");
  //   onValue(feedbackRef, (snapshot) => {
  //     const data = snapshot.val();
  //     if (data) {
  //       const reviewsList = Object.values(data);
  //       setReviews(reviewsList);
  //       // reviews.push(reviewsList[0]);
  //     }
  //   });
  // }, [db]);
  // console.log("sdssds", reviews);

  useEffect(() => {
    const feedbackRef = ref(db, "feedback");
    onValue(feedbackRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const reviewsList = Object.values(data);
        const mergedReviews = [...reviews, ...reviewsList];
        setReviews(mergedReviews);
      }
    });
  }, [db]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1200,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1200,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1200,
        },
      },
    ],
  };

  return (
    <>
      <div className="container-xxl bg-light my-6 py-6 pb-0">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <p className="text-primary text-uppercase mb-2">Client's Review</p>
            <h1 className="display-6 mb-4">
              More Than 600+ Customers Trusted Us
            </h1>
          </div>

          <StyledSlider
            {...settings}
            className="testimonial-carousel wow fadeInUp m-4 p-2 mb-3"
            data-wow-delay="0.1s"
          >
            {reviews.map((item, index) => (
              <div key={index} className="testimonial-item p-3">
                <div className="bg-white rounded p-4">
                  <div className="d-flex align-items-center mb-4 slide-wrapper">
                    <img
                      className="flex-shrink-0 rounded-circle border p-1 slick-slideimg"
                      src={item.imageUrl}
                      alt=""
                    />
                    <div className="ms-4">
                      <h6 className="mb-1 ">{item.name}</h6>
                    </div>
                  </div>
                  <p className="mb-0">{item.message}</p>
                </div>
              </div>
            ))}
          </StyledSlider>
        </div>
        <div
          className="bg-primary text-light rounded-top p-2 my-6 mb-0 wow fadeInUp"
          data-wow-delay="0.1s"
        ></div>
      </div>
    </>
  );
};
