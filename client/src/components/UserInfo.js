import React, { useEffect, useState } from 'react'

function UserInfo() {
  //Hold user's state
  const [users,setUsers] = useState([])

  //fetch data from the api
  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then((data) => {
        //console.log(data)
        setUsers(data) 
    })
  },[])

  


  return (
    <div className='row'>
      
        {users?.map(data => {
          //loop through the data and display each of the arrays
          return(
            <div className="card col-2 m-2" key={data.id} >
              <div className="card-body">
                <h5 className="card-title">Name: {data.name}</h5>
                <p className="card-text">Username: {data.username}</p>
                <p className="card-text">Email: {data.email}</p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default UserInfo