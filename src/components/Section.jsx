import React from "react";
import "../css/Section.css";

const Section = () => {
  return (
    <div className="mocktalk-bg">
      <div className="container">
        {/* Headline */}
        <h2 className="fw-bold display-5">
          Ace Your Interviews Faster with <br />
          <span className="mocktalk-color text-decoration-underline">
            AI-Powered
          </span>{" "}
          Mock Sessions!
        </h2>

        {/* Tagline */}
        <p className="mt-3 fs-5 fst-italic">Mock. Master. Succeed.</p>

        {/* Rating */}
        <div className="mt-3">
          <span className="text-warning fs-3">★★★★☆</span>
          <p className="fw-semibold fs-5 mt-1">
            4.1 rating from <strong>1059</strong> users
          </p>
        </div>

        {/* User Avatars */}
        <div className="d-flex justify-content-center align-items-center mt-3">
          {[1, 2, 3, 4].map((_, index) => (
            <img
              key={index}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMevJFZGY1xvPjPoTIoeQtYtBEr9W9ciCdSeYnh0fj9w_D8I6BWgCEYYlSccFJOucreuw&usqp=CAU"
              className={`avatar-img ${index > 0 ? "avatar-stack" : ""}`}
              alt={`user${index + 1}`}
            />
          ))}

          <div className="avatar-img avatar-stack bg-primary text-white d-flex justify-content-center align-items-center fw-bold">
            +99
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
          <button type="button" className="btn btn-primary">
            Get Started
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section;
