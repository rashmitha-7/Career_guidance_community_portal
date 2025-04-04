import React from "react";
import { useNavigate } from "react-router-dom";
import "./Library.css"; // Import CSS file for animations
//import mentorsData from "../data/mentorsData"; // Move data to a separate file
import mentorsData from "./mentorsData";  

const Mentors = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 fade-in">
      <h2 className="text-center">Meet Our Mentors</h2>

      <div className="row mt-4 gy-4 justify-content-center">
        {mentorsData.map((mentor) => (
          <div
            key={mentor.id}
            className="col-md-6 col-lg-4"
            onClick={() => navigate(`/mentor/${mentor.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="card shadow-lg text-center p-3 card-hover">
              <img
                src={mentor.image}
                className="card-img-top mx-auto category-img"
                alt={mentor.name}
              />
              <h5 className="mt-3">{mentor.name}</h5>
              <p className="text-muted">{mentor.title}</p>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center mt-5 py-3 bg-light">
        <p>&copy; 2025 Career Mentorship. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Mentors;
