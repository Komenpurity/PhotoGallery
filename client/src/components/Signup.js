import React, { useState } from 'react'

function Signup() {
  const [username,setUsername] = useState("") 
  const [password, setPassword] = useState("");
  const [name,setName] = useState("")
  const [email,setEmail] = useState("") 

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          name: "Slyvia",
          username: "sylviawoods",
          password: "whatscooking",
          email: "slvia@gmail.com",
        },
      }),
    })
      .then((r) => r.json())
      .then((user) =>{
        console.log(user)
      } ); 
  }

  return (
    <div className="container m-5 d-flex justify-content-center w-50">   
    <form onSubmit={handleSubmit}>
    <h5 className='display-5'>Signup</h5> 

        <div className="form-group"> 
            <label id='name'>Name </label>
            <input type="name" className="form-control" id='name' value={name}   onChange={(e) => setName(e.target.value)} placeholder="Enter Name" />
        </div>

        <div className="form-group"> 
            <label id='username'>Username </label>
            <input type="username" className="form-control" id='username' value={username}   onChange={(e) => setUsername(e.target.value)} placeholder="Enter username" />
        </div>

        <div className="form-group"> 
            <label id='username'>Email </label>
            <input type="username" className="form-control" id='email' value={email}   onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </div>

        <div className="form-group">
            <label id='password'>Password</label>
            <input type="password" id='password' value={password}  onChange={(e) => setPassword(e.target.value)} className="form-control"  placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary">SignUp</button>
    </form>
</div>

  )
}

export default Signup