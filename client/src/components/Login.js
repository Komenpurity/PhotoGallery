import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../ firebase"
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Login() {
  //store password and email in state
  const [password, setPassword] = useState("");
  const [email,setEmail] = useState("")
  /* eslint-disable no-unused-vars */
  const [user,setUser] = useState("")
  const navigate = useNavigate();

    //handle submit data from the form
    function handleSubmit(e) {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
        .then((user) =>{
          setUser(user) 
           navigate('/userinfo') 
        } )
        .catch((error) => {
          console.log(error);
          alert("Login Failed") 
        });
    }  


  return (
    <div className='container'> 
     <Navbar />
    <div className="m-5 d-flex justify-content-center w-50">   
        <form onSubmit={handleSubmit}>
        <h5 className='display-5'>Login</h5>

          <div className="form-group"> 
              <label id='email'>Email </label>
              <input data-type="email" type="email" className="form-control" id='email' value={email}   onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
          </div>

            <div className="form-group">
                <label id='password'>Password</label>
                <input data-type="password" type="password" id='password' value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control"  placeholder="Password" />
            </div>

            <button data-type="data-submit" type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default Login