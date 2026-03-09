import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h3> <span>✳</span>Viral</h3>
      </div>

      {}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
      </div>

      <ul className={open ? "nav active" : "nav"}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Studies</a></li>
        <li><a href="#">Blog</a></li>
        <button>Book a call</button>
      </ul>
    </nav>
  );
}

export default Navbar;
