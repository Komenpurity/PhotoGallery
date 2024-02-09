import React, { useEffect, useState } from 'react'
import UserDisplay from './UserDisplay'
import DataNav from './DataNav'

function UserInfo() { 
  //Hold user's state
  const [users,setUsers] = useState([])
  const [value,setValue] = useState([]) 

  //fetch data from the api
  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then((data) => {
        //console.log(data)
        setUsers(data) 
    })
    .catch(error => console.log(error))    
  },[])

  //fetch user clicked by id
  function handleClick(id){
    fetch(`/users/${id}`)
    .then(response => response.json())
    .then((data) =>  {  
      setValue([data])    
      //console.log(data)
    }) 
    .catch(error => console.log(error))    
  }


  return (
    <div className='container'>
      <DataNav />
    <div className='row'>
      <h4>Users</h4>

        {users?.map(data => {
          //loop through the data and display each of the arrays
          return(
            <div className="card col-2 m-2" key={data.id} onClick={() => handleClick(data.id)}> 
              <div className="card-body">
                <h5 className="card-title">Name: {data.name}</h5>
                <p className="card-text">Username: {data.username}</p>
                <p className="card-text">Email: {data.email}</p>
              </div>
            </div>
          )
        })}

       {value?.map((element) => {     
            return <UserDisplay key={element.id} name={element.name} username={element.username} email={element.email} />  
          }
        )}  

    </div>
    </div>
  )
}

export default UserInfo