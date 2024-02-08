import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand d-flex align-items-start m-2 flex-column font-weight-bold" href="/">PhotoGallery</a>
        
        <div className="navbar-nav m-4">
            <li className="nav-item nav-link"> <Link to="/" className="navbar-link text-decoration-none text-black">Home</Link> </li>
        </div>

        <div className="navbar-nav d-flex justify-content-end">
            <button type="button" className="btn btn-outline-info" ><Link to="/signup" className="navbar-link text-decoration-none text-black">Signup</Link></button>
        </div>

    </nav>
  )
}

export default Navbar