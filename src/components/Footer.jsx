import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
      <div className="container">
        <p>© 2025 Career Guidance Portal. All rights reserved.</p>
        <div className="d-flex justify-content-center">
          <a href="/privacy" className="text-white me-3">Privacy Policy</a>
          <a href="/terms" className="text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
