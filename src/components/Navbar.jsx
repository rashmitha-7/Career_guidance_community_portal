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
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/library">Library</a></li>
            <li className="nav-item"><a className="nav-link" href="/mentors">Mentors</a></li>
            <li className="nav-item"><a className="nav-link" href="/quiz">Quiz</a></li>
            <li className="nav-item"><a className="nav-link" href="/profile">Profile</a></li>
            <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
            <li className="nav-item"><a className="nav-link" href="/signup">Signup</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
