import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Dashboard = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Dashboard</h2>
      <p className="text-center text-muted">Welcome to your personalized career dashboard.</p>
      
      {/* Dashboard Cards */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5 className="fw-bold">Mentors</h5>
            <p>Connect with professionals in your field.</p>
            <a href="/mentors" className="btn btn-primary">Browse Mentors</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5 className="fw-bold">Career Library</h5>
            <p>Access resources and learning materials.</p>
            <a href="/library" className="btn btn-primary">View Library</a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3">
            <h5 className="fw-bold">Career Quiz</h5>
            <p>Find the best career path for you.</p>
            <a href="/quiz" className="btn btn-primary">Take Quiz</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;