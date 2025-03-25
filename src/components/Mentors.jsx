import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const mentorsData = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer at Google",
    experience: "10+ years in software development with expertise in AI and ML.",
    opportunities: "Opportunities in tech giants, startups, and freelancing.",
    fieldInfo:
      "Software Engineering involves designing, developing, and maintaining software systems. It's a field in high demand across various industries.",
    image: "/mentor1.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Professional Coach",
    experience: "8+ years in professional coaching with a focus on career growth.",
    opportunities: "Opportunities in corporate training, personal development, and coaching.",
    fieldInfo:
      "Professional coaching helps individuals and organizations enhance performance, achieve goals, and develop leadership skills.",
    image: "/mentor2.jpg",
  },
  {
    id: 3,
    name: "Alex Brown",
    title: "Cardiologist",
    experience: "15+ years in the medical field with specialization in cardiology.",
    opportunities: "Opportunities in hospitals, private practice, and research.",
    fieldInfo:
      "Cardiology is a medical specialty dealing with disorders of the heart. It requires deep knowledge and years of training.",
    image: "/mentor3.jpg",
  },
];

const Mentors = () => {
  const [hoveredMentor, setHoveredMentor] = useState(null);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Meet Our Mentors</h2>
      <p className="text-center text-muted">
        Connect with experienced professionals to guide your career path.
      </p>

      <div className="row mt-4 gy-4 justify-content-center">
        {mentorsData.map((mentor) => (
          <div
            key={mentor.id}
            className="col-md-6 col-lg-4"
            onMouseEnter={() => setHoveredMentor(mentor.id)}
            onMouseLeave={() => setHoveredMentor(null)}
          >
            <div
              className="card shadow-lg text-center position-relative"
              style={{
                overflow: "hidden",
                borderRadius: "15px",
                transition: "transform 0.3s",
                cursor: "pointer",
                boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
                minHeight: "350px",
                backgroundColor: "#f7f7f7",
                padding: "20px",
              }}
            >
              <img
                src={mentor.image}
                className="card-img-top rounded-circle mx-auto"
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "cover",
                  marginTop: "20px",
                  border: "4px solid #007bff",
                }}
                alt={mentor.name}
              />
              <h5 className="fw-bold mt-3">{mentor.name}</h5>
              <p className="text-muted">{mentor.title}</p>

              {/* Enhanced Hover Effect */}
              {hoveredMentor === mentor.id && (
                <div
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    right: "0",
                    bottom: "0",
                    backgroundColor: "rgba(0, 123, 255, 0.9)",
                    color: "white",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1,
                    transition: "opacity 0.4s",
                    opacity: 0.95,
                    borderRadius: "15px",
                  }}
                >
                  <h5 className="mb-2">{mentor.name}</h5>
                  <p style={{ fontSize: "14px", marginBottom: "10px" }}>
                    {mentor.fieldInfo}
                  </p>
                  <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                    <strong>Experience:</strong> {mentor.experience}
                  </p>
                  <p style={{ fontSize: "13px" }}>
                    <strong>Opportunities:</strong> {mentor.opportunities}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentors;
