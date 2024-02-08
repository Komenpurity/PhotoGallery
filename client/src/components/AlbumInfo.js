import React, { useEffect, useState } from 'react'

function AlbumInfo() {
    const [album,setAlbum] = useState([]) 

    //fetch data from the api
    useEffect(() => {
        fetch("/albums") 
        .then((r) => r.json())
        .then((data) => { 
            setAlbum(data)
            console.log(album)  
        })
        .catch(error => console.log(error))    
    },[])

  return (
    <div className='row'>
      <h4>Albums</h4> 
        {album?.map(data => {
          //loop through the data and display each of the albums from the api
          return(
            <div className="card col-2 m-2" key={data.albumId} > 
              <div className="card-body">
                <h5 className="card-title">Name: {data.albumTitle}</h5>
                <p className="card-text">Username: {data.userId}</p> 
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default AlbumInfo