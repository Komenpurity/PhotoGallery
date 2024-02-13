import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserSelected() { 
 const { id } = useParams();
 const [value,setValue] = useState([])
  
 //fetch user data from api using the specified id
   useEffect(() => {
    fetch(`/users/${id}`)
    .then(response => response.json())
    .then((data) =>  {  
       setValue([data])          
    }) 
    .catch(error => console.log(error)) 
   },[])

  return (
    <div className='container m-3'> 
  
        { value.map((element) => {
            return(
              <> 
                <div className="card max-w-sm rounded overflow-hidden shadow-lg d-flex m-4 col-6" key={element.id}> 
                     <div className="card-body" key={element.id}> 
                         <h5>{element.name}</h5>  
                         <p>Username: {element.username}</p> 
                          <p >Email: {element.email}</p>
                          <p> How many Albums: {element.albums.length}</p>

                          <h5>Album Photos</h5>
                              { element.albums.map(data => { 
                                  return (
                                    <ul key={data.id}> 
                                      <li key={data.id}> {data.albumTitle} </li> 
                                    </ul>   
                                )}) }
                          
                    </div>
                  </div>
              </>
            )
        } )}
    </div>
  )
}

export default UserSelected