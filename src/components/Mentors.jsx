import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Mentors = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Meet Our Mentors</h2>
      <p className="text-center text-muted">Connect with experienced professionals to guide your career path.</p>
      
      {/* Mentors List */}
      <div className="row mt-4 gy-4">
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <img src="/john.jpg" className="card-img-top rounded-circle mx-auto" style={{ width: "100px" }} alt="Mentor" />
            <h5 className="fw-bold mt-3">John Doe</h5>
            <p className="text-muted">Software Engineer at Google</p>
            <button className="btn btn-primary">View Profile</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <img src="/mentor2.jpg" className="card-img-top rounded-circle mx-auto" style={{ width: "100px" }} alt="Mentor" />
            <h5 className="fw-bold mt-3">Jane Smith</h5>
            <p className="text-muted">Data Scientist at Microsoft</p>
            <button className="btn btn-primary">View Profile</button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow-sm p-3 text-center">
            <img src="/mentor3.jpg" className="card-img-top rounded-circle mx-auto" style={{ width: "100px" }} alt="Mentor" />
            <h5 className="fw-bold mt-3">Alex Brown</h5>
            <p className="text-muted">Marketing Specialist at Amazon</p>
            <button className="btn btn-primary">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;
