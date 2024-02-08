import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="container navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand font-weight-bold" href="/">PhotoGallery</a>
        <div className="navbar-nav">
            <li className="nav-item nav-link"> <Link to="/" className="navbar-link text-decoration-none text-black">Home</Link> </li>
        </div>

        <div className="navbar-nav">
            <button type="button" className="btn btn-outline-info" ><Link to="/signup" className="navbar-link text-decoration-none text-black">Signup</Link></button>
        </div>

    </nav>
  )
}

export default Navbar