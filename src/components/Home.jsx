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
          <img src="/career.jpg" alt="Career" className="img-fluid rounded" />
        </div>
      </div>

      {/* Career Path Section */}
      

      {/* Career Options Section */}
      <div className="mt-5 p-4 bg-white rounded shadow">
        <h2 className="fw-bold">Explore Career Options</h2>
        <p className="text-muted">Choose a career path that suits your education level and interests.</p>
        <div className="row">
          <div className="col-md-4">
            <h4>For School Students</h4>
            <p>Discover foundational career paths, skill-building opportunities, and future career possibilities.</p>
            <Link to="/career-school" className="btn btn-primary">Explore</Link>
          </div>
          <div className="col-md-4">
            <h4>For Intermediate Students</h4>
            <p>Find suitable higher education options and career guidance for stream selection.</p>
            <Link to="/career-intermediate" className="btn btn-primary">Explore</Link>
          </div>
          <div className="col-md-4">
            <h4>For Higher Career Options</h4>
            <p>Learn about professional degrees, certifications, and industry trends.</p>
            <Link to="/career-higher" className="btn btn-primary">Explore</Link>
          </div>
        </div>
      </div>
      <div className="mt-5 p-4 bg-light rounded">
        <h2 className="fw-bold">Know more about <span className="text-primary">Your Career Path</span></h2>
        <p className="text-muted">
          Our conceptual career assistance framework is based on cognitive behavioral theory
          that helps you find the accurate career match.
        </p>
        <Link to="/Library" className="btn btn-dark">Learn More</Link>
      </div>
    </div>
  );
};

export default Home;