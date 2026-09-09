import React from "react";

const Navbar = () => {
  return (
    <>
      <header>
        <h3>My App Lab</h3>
      </header>
      <nav className="navbar">
        <a style={{ textDecoration: "none", margin: "0 10px" }} href="">
          Home
        </a>
        <a style={{ textDecoration: "none", margin: "0 10px" }} href="">
          About
        </a>
        <a style={{ textDecoration: "none", margin: "0 10px" }} href="">
          Contact
        </a>
      </nav>
    </>
  );
};

export default Navbar;
