import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = {
    background: "#27ae60",
    color: "#fff",
    borderRadius: "5px",
  };
  return (
    <div className="header">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink className="logo ps-5" to="/">
            <p>
              <i className="fas fa-user-graduate"></i>
            </p>
            <h5>
              Bright <br /> <span className="logo-text">Future</span>{" "}
            </h5>{" "}
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-5 mb-2 mb-lg-0">
              <li class="nav-item">
              <NavLink className='menu-link' activeStyle={activeStyle} to='/home'>Home</NavLink>
              </li>
              <li class="nav-item">
              <NavLink className='menu-link' activeStyle={activeStyle} to='/about'>About</NavLink>
              </li>
              <li class="nav-item">
              <NavLink className='menu-link' activeStyle={activeStyle} to='/services'>Services</NavLink>
              </li>
              <li class="nav-item">
              <NavLink className='menu-link' activeStyle={activeStyle} to='/teachers'>Teachers</NavLink>
              </li>
              <li class="nav-item">
              <NavLink className='menu-link' activeStyle={activeStyle} to='/contact'>Contact us</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
      {/* <div>
            <NavLink className='logo' to='/home'><p><i className="fas fa-user-graduate"></i></p><h5>Bright <br/> <span className='logo-text'>Future</span> </h5> </NavLink>
            </div>
            <div className='navigation-bar'>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/home'>Home</NavLink>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/about'>About</NavLink>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/services'>Services</NavLink>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/teachers'>Teachers</NavLink>
            <NavLink className='menu-link' activeStyle={activeStyle} to='/contact'>Contact us</NavLink>
            </div> */}
    </div>
  );
};

export default Header;
