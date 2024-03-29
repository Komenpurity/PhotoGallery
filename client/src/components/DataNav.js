import React from 'react'
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../ firebase";
import { useNavigate } from 'react-router-dom';

function DataNav() {
    const navigate = useNavigate();

    const userSignOut = () => {
        signOut(auth)
          .then(() => {
            console.log("sign out successful");
             navigate('/login') 
          })
          .catch((error) => console.log(error));

      };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
        <div className="navbar-nav m-4">
            <li className="nav-item nav-link"> <Link to="/" className="navbar-link text-decoration-none text-black">Home</Link> </li>
        </div>

        <div className="navbar-nav m-4">
            <li className="nav-item nav-link"> <Link to="/userinfo" className="navbar-link text-decoration-none text-black">Users</Link> </li>
        </div>

        <div className="navbar-nav m-4">
            <li className="nav-item nav-link"> <Link to="/album" className="navbar-link text-decoration-none text-black">Album</Link> </li>
        </div>

        <div className="navbar-nav m-4">
            <li className="nav-item nav-link"> <Link to="/photo" className="navbar-link text-decoration-none text-black">Photo</Link> </li>
        </div>

        <div className="navbar-nav d-flex justify-content-end">
            <button type="button" className="btn btn-outline-info text-black" onClick={userSignOut} >SignOut</button>
        </div>

    </nav>
  )
}

export default DataNav