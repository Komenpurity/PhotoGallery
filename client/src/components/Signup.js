import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../ firebase"
import Navbar from './Navbar'

function  Signup() {
  //store password and email state
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("")

    //handle form data
    function handleSubmit(e) {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) =>{
          console.log(user)
        } )
        .catch((error) => {
          console.log(error);
        });
    }  


  return (
    <div className='container'>
    <Navbar />
    <div className=" m-5 d-flex justify-content-center w-50">  
        <form onSubmit={handleSubmit}>
        <h5 className='display-5'>Signup</h5>

          <div className="form-group"> 
              <label id='email'>Email </label>
              <input type="email" className="form-control" autoComplete="off" id='email' value={email}   onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
          </div>

            <div className="form-group">
                <label id='password'>Password</label>
                <input type="password" id='password'  value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control"  placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary m-2">Submit</button>

            <p>Already have an account, <Link to="/login" className="navbar-link text-black"> Login </Link></p>
        </form>
    </div>
    </div>
  )
}

export default Signup