import React, { useEffect, useState } from 'react'
import DataNav from './DataNav'
import { useNavigate } from 'react-router-dom';

function AlbumInfo() {
    const [album,setAlbum] = useState([]) 
    const navigate = useNavigate();

    //fetch data from the api
    useEffect(() => {
        fetch("/albums") 
        .then((r) => r.json())
        .then((data) => { 
            setAlbum(data)
            //console.log(data)   
        })
        .catch(error => console.log(error))    
    },[])


    //fetch album details when card clicked by id 
  function handleClick(id){
    { navigate(`/albums/${id}`) }  
  }


  return (
    <div className='container'> 
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

    </div>
  )
}

export default AlbumInfo