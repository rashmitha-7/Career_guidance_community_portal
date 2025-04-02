import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  
  return (
    <div className="container mt-4">
      <h2 className="text-center">Welcome to Your Career Dashboard</h2>
      
      <section className="career-counseling card p-3 mb-3">
        <h3>Career Counseling</h3>
        <p>Get expert advice on career choices, job searches, and skill-building.</p>
        <button className="btn btn-primary" onClick={() => navigate("/counseling")}>Book a Session</button>
      </section>

      <section className="job-listings card p-3 mb-3">
        <h3>Job Listings</h3>
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Software Engineer - Google <button className="btn btn-success" onClick={() => navigate("/apply/google")}>Apply</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Data Analyst - Microsoft <button className="btn btn-success" onClick={() => navigate("/apply/microsoft")}>Apply</button>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Product Manager - Amazon <button className="btn btn-success" onClick={() => navigate("/apply/amazon")}>Apply</button>
          </li>
        </ul>
        <button className="btn btn-secondary mt-2" onClick={() => navigate("/jobs")}>View More Jobs</button>
      </section>

      <section className="skill-development card p-3 mb-3">
        <h3>Skill Development Programs</h3>
        <p>Join training programs to enhance your skills in various domains.</p>
        <button className="btn btn-info" onClick={() => navigate("/skills")}>Explore Programs</button>
      </section>

      <section className="mentorship card p-3 mb-3">
        <h3>Networking & Mentorship</h3>
        <p>Connect with industry professionals for guidance and networking.</p>
        <button className="btn btn-warning" onClick={() => navigate("/mentors")}>Find a Mentor</button>
      </section>

      <section className="resume-builder card p-3 mb-3">
        <h3>Resume Builder</h3>
        <p>Create a professional resume with our easy-to-use resume builder.</p>
        <button className="btn btn-dark" onClick={() => navigate("/resume")}>Build Your Resume</button>
      </section>

      <section className="discussion-forums card p-3">
        <h3>Discussion Forums</h3>
        <p>Engage in discussions and seek advice from professionals.</p>
        <button className="btn btn-outline-primary" onClick={() => navigate("/forums")}>Join Forums</button>
      </section>
    </div>
  );
}

export default Dashboard;
