import React from "react";
import { useNavigate } from "react-router-dom";
//import mentorsData from "../data/mentorsData"; // Move data to a separate file
import mentorsData from "./mentorsData";  

const Mentors = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h2 className="text-center">Meet Our Mentors</h2>

      <div className="row mt-4 gy-4 justify-content-center">
        {mentorsData.map((mentor) => (
          <div
            key={mentor.id}
            className="col-md-6 col-lg-4"
            onClick={() => navigate(`/mentor/${mentor.id}`)}
            style={{ cursor: "pointer" }}
          >
            <div className="card shadow-lg text-center p-3">
              <img
                src={mentor.image}
                className="card-img-top rounded-circle mx-auto"
                style={{ width: "120px", height: "120px", objectFit: "cover" }}
                alt={mentor.name}
              />
              <h5 className="mt-3">{mentor.name}</h5>
              <p className="text-muted">{mentor.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
