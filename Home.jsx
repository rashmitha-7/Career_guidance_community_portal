import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      {/* Hero Section */}
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-4 fw-bold">Career For Future</h1>
          <p className="text-muted lead">Empower your career journey with expert guidance</p>
          <p>
            Join our community to connect with experienced mentors, explore career resources,
            and discover opportunities to grow and succeed.
          </p>
          <Link to="/signup" className="btn btn-primary me-3">Get Started</Link>
          <Link to="/mentors" className="btn btn-outline-primary">Browse Mentors</Link>
        </div>
        <div className="col-md-6">
          <img src="/career-image.png" alt="Career" className="img-fluid rounded" />
        </div>
      </div>

      {/* Career Path Section */}
      <div className="mt-5 p-4 bg-light rounded">
        <h2 className="fw-bold">Know more about <span className="text-primary">Your Career Path</span></h2>
        <p className="text-muted">
          Our conceptual career assistance framework is based on cognitive behavioral theory
          that helps you find the accurate career match.
        </p>
        <Link to="/library" className="btn btn-dark">Learn More</Link>
      </div>
    </div>
  );
};

export default Home;