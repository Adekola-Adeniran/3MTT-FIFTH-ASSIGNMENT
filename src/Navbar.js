import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/">Adekola</Link>
      </div>
      <div>
        <p><Link to="/signup">Sign Up</Link></p>
      </div>
    </nav>
  );
};

export default Navbar;
