import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function AlbumSelected() {
    const { id } = useParams();
    const [info,setInfo] = useState([]) 

    //fetch album of a specific id
    useEffect(() => {
        fetch(`https://photogalleryapi.onrender.com/albums/${id}`)
        .then(response => response.json())
        .then((data) =>  {  
            setInfo([data]) 
        }) 
        .catch(error => console.log(error))  
    },[id]) 

  return (
    <div>
        <div className='container row'> 
           <h5 className='m-2'>Album Details</h5>  

        {info?.map((element) => {   
            return(
                <div className="card max-w-sm rounded overflow-hidden shadow-lg m-4 col-6" key={element.id}> 
                     <div className="card-body">
                         <h5>Album Title: {element.albumTitle}</h5>

                          <h5 className='m-3'>Album Photos</h5> 
                          {element.photos.slice(0,90)?.map((data) => {  
                            return(
                              <div key={data.id}> 
                                <ul key={data.id}> 
                                  <li>{data.photoTitle}</li>
                                  <img src={data.imageUrl} className="w-25 h-25" alt='img'/>
                                </ul> 
                              </div>
                              
                            )})}
                    </div>
                  </div>
            )
          }
        )}  
        </div>
    </div>
  )
}

export default AlbumSelected