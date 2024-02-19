import React, { useEffect, useState } from 'react'
import DataNav from './DataNav'
import { Link } from "react-router-dom";

function PhotoInfo() {
    const [photo,setPhoto] = useState([]) 
    const [loading, setLoading] = useState(true);

    //fetch data from the api
    useEffect(() => {
        fetch("https://photogallery-2dl5.onrender.com/photos") 
        .then((r) => r.json())
        .then((data) => { 
           setPhoto(data)
           setLoading(false); 
        })
        .catch(error => console.log(error))    
    },[])

   
  return (
    <div className='container'>
      { loading ? (
        <h5 className='d-flex justify-content-center m-4'> Loading... <i className="fas fa-atom fa-spin"></i> </h5>  
       ) : (
        <>
          <DataNav />
        <div className='row'>
          <h4>Photo</h4> 
            {photo.slice(0,25)?.map(data => {  
              //the slice method allows us to display values from index 0 to 179 since the api has alot of values
              //loop through the data and display each of the photos from the api
              return(
                <div className="card max-w-sm rounded overflow-hidden shadow-lg col-2 m-2" key={data.id} >  
                    <img src={data.imageUrl} className="card-img-top m-1" alt='img'/> 
                  <div className="card-body">
                    <h5 className="card-title">Name: {data.photoTitle}</h5> 
                    <button type='submit' className='btn btn-success'><Link to={`/photos/${data.id}`} className='text-decoration-none text-white'> Edit Name </Link></button>
                    </div>
                </div>
              )
            })}
          </div>
        </>
      ) }
    </div>
  )
}

export default PhotoInfo