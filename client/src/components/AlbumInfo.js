import React, { useEffect, useState } from 'react'
import DataNav from './DataNav'
import { useNavigate } from 'react-router-dom';

function AlbumInfo() {
    const [album,setAlbum] = useState([]) 
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    //fetch data from the api
    useEffect(() => {
        fetch("https://photogalleryapi.onrender.com/albums") 
        .then((r) => r.json())
        .then((data) => { 
            setAlbum(data)
            setLoading(false); 
        })
        .catch(error => console.log(error))    
    },[])


    //fetch album details when card clicked by id 
  function handleClick(id){
     navigate(`https://photogalleryapi.onrender.com/albums/${id}`)  
  }


  return (
    <div className='container'> 
    {loading ? (
          <h5 className='d-flex justify-content-center m-4'> Loading... <i className="fas fa-atom fa-spin"></i> </h5>  
    ) : (
      <>
          <DataNav />
        <div className='row'>
          <h4>Albums</h4> 
            {album?.map(data => {
              //loop through the data and display each of the albums from the api
              return(
                <div onClick={() => handleClick(data.id)} className="card max-w-sm rounded overflow-hidden shadow-lg col-2 m-2" key={data.id} > 
                  <div className="card-body">
                    <h5> {data.albumTitle} </h5>
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

export default AlbumInfo