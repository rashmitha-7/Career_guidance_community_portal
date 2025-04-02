import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">Career Portal</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/dashboard">Dashboard</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/library">Library</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/mentors">Mentors</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/quiz">Quiz</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signup">Signup</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
