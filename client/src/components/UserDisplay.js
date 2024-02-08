import React from 'react'

function UserDisplay({key,name,username,email}) {

  return (
        <div className="card col-2 m-2" key={key}> 
           <div className="card-body">
               <h5 className="card-title">Name: {name}</h5>
                <p className="card-text">Username: {username}</p>
                <p className="card-text">Email: {email}</p>
          </div>
        </div>
  )
}

export default UserDisplay