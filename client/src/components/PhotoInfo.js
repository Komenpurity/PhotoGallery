import React, { useEffect, useState } from 'react'

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
    <div className='row'>
      <h4>Photo</h4> 
        {photo?.map(data => { 
          //loop through the data and display each of the photos from the api
          return(
            <div className="card col-2 m-2" key={data.id} >  
                <h5 className="card-title">AlbumId: {data.albumId}</h5> 
                <img src={data.imageUrl} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Name: {data.photoTitle}</h5>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default PhotoInfo