import React, { useState } from 'react'

function Login() {

  const [username,setUsername] = useState("") 
    const [password, setPassword] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username, 
          password
        }),
      })
        .then((r) => r.json())
        .then((user) =>{
          setUsername(user) 
          console.log(user)
        } ); 
    }  


  return (
    <div className="container m-5 d-flex justify-content-center w-50">   
        <form onSubmit={handleSubmit}>
        <h5 className='display-5'>Login</h5>  
            <div className="form-group"> 
                <label id='username'>Username </label>
                <input type="username" className="form-control" id='username' value={username}   onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
            </div>
            <div className="form-group">
                <label id='password'>Password</label>
                <input type="password" id='password' value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control"  placeholder="Password" />
            </div>

            <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
    </div>
  )
}

export default Login