import React from "react";

const Team = () => {
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
      <div className="container-xxl py-6 pb-0">
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
    </>
  );
};

export default Team;
