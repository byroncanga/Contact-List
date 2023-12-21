import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light  bg-opacity-10 p-4 shadow-lg">
        <div className="container-fluid">
          <a className="navbar-brand mx-5">
            <i className="fa-regular fa-id-badge"></i> Contact List
          </a>
          <Link
            className="btn btn-success mx-5"
            type="submit"
            to={"/addcontact"}
          >
            New Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
