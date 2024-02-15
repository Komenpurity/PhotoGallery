import React from 'react'
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>

        <div className='container landing img-fluid font-weight-bold'>
          <img src='' alt=''/>
          <h1>PhotoGallery</h1>
          <h3>The Home for Your Memories</h3> 
          <button type="button" className="btn btn-info btn-lg"> <Link to="/signup" className="navbar-link text-decoration-none text-black"> Get Started </Link></button>
        </div>
    </div>
    
  )
}

export default Landing