import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const DiscoverMore = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center fw-bold">Discover More</h1>
      <p className="text-center text-muted">Expand your knowledge with additional resources and opportunities.</p>
      
      <div className="row">
        <div className="col-md-4 text-center">
          <img src="/images/online-courses.jpg" alt="Online Courses" className="img-fluid rounded mb-3" />
          <h4>Online Courses</h4>
          <p>Explore high-quality courses from top universities and platforms.</p>
          <a href="https://www.coursera.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Explore</a>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/internships.jpg" alt="Internships" className="img-fluid rounded mb-3" />
          <h4>Internships</h4>
          <p>Find internship opportunities to gain practical experience.</p>
          <a href="https://internshala.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Explore</a>
        </div>
        <div className="col-md-4 text-center">
          <img src="/images/workshops.jpg" alt="Workshops" className="img-fluid rounded mb-3" />
          <h4>Workshops & Webinars</h4>
          <p>Attend interactive workshops and webinars to enhance your skills.</p>
          <a href="https://www.eventbrite.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Explore</a>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/career-higher" className="btn btn-outline-secondary">Back to HigherCareer</Link>
      </div>
    </div>
  );
};

export default DiscoverMore;
