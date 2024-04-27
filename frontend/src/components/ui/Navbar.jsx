import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="header">
        <div className="upper-nav flex align-center justify-between">
          <div>
              Coinbounce 
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/create-blog">Create blog</Link>
              </li>
            </ul>
          </nav>
          <div className="avatar-menu">
              <Link to={"/signup"}>
                <Button variant="contained">Signup</Button>
              </Link>
          </div>
        </div>
        <div className="lower-nav">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/create-blog">Create blog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
