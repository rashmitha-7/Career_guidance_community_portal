import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Enter your email" required />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" placeholder="Enter your password" required />
          </div>
          <div className="mb-3 d-flex justify-content-between">
            <div>
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label ms-2" htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot-password" className="text-decoration-none">Forgot Password?</Link>
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup" className="text-decoration-none">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;