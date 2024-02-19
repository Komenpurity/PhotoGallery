import React, { useEffect, useState } from 'react'
import DataNav from './DataNav'
import { useNavigate } from 'react-router-dom';

function UserInfo() { 
  //Hold user's state
  const [users,setUsers] = useState([]) 
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  //fetch data from the api
  useEffect(() => {
    fetch("https://photogallery-2dl5.onrender.com/users")
    .then((r) => r.json())
    .then((data) => {
        setUsers(data)
        setLoading(false); 
    })
    //handle errors
    .catch(error => console.log(error))    
  },[])

      //redirect the user to the specified id
      function handleClick(id){  
       navigate(`/users/${id}`)   
     }


  return (
    <div className='container'>
      { loading ? (
        <h5 className='d-flex justify-content-center m-4'> Loading... <i className="fas fa-atom fa-spin"></i> </h5>  
      ) : (
      <>
          <DataNav />
        <div className='row'>
          <h4>Users</h4>

            {users?.map(data => {
              //loop through the data and display each of the arrays
              return(
                <div className="card max-w-sm rounded overflow-hidden shadow-lg col-3 m-2" 
                key={data.id} onClick={() => handleClick(data.id)}> 
                  <div className='card-body'>
                    <h5>{ data.name }</h5>
                    <p>Username: {data.username}</p> 
                    <p >Email: {data.email}</p>
                    <p> How many Albums: {data.albums.length}</p>
                  </div>
                </div>
              )
            })}

        </div>
      </>
      )}
    </div>
  )
}

export default UserInfo