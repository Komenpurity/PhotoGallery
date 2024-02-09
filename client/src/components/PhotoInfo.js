import React, { useEffect, useState } from 'react'
import DataNav from './DataNav'

function PhotoInfo() {
    const [photo,setPhoto] = useState([]) 

    //fetch data from the api
    useEffect(() => {
        fetch("/photos") 
        .then((r) => r.json())
        .then((data) => { 
           setPhoto(data)
           //console.log(data)  
        })
        .catch(error => console.log(error))    
    },[])

   
  return (
    <div className='container'>
      <DataNav />
    <div className='row'>
      <h4>Photo</h4> 
        {photo.slice(0,180)?.map(data => { 
          //the slice method allows us to display values from index 0 to 179 since the api has alot of values
          //loop through the data and display each of the photos from the api
          return(
            <div className="card max-w-sm rounded overflow-hidden shadow-lg col-2 m-2" key={data.id} >  
                <img src={data.imageUrl} className="card-img-top m-1"/>
              <div className="card-body">
                <h5 className="card-title">Name: {data.photoTitle}</h5>
              </div>
            </div>
          )
        })}
    </div>
    </div>
  )
}

export default PhotoInfo