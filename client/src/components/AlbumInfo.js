import React, { useEffect, useState } from 'react'
import DataNav from './DataNav'

function AlbumInfo() {
    const [album,setAlbum] = useState([]) 
    const [info,setInfo] = useState([])

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
    fetch(`/albums/${id}`)
    .then(response => response.json())
    .then((data) =>  {  
      setInfo([data]) 
     // console.log(info)  
    }) 
    .catch(error => console.log(error))    
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

    <div className='row'> 
      <h5>Album Details</h5> 

      {info?.map((element) => {   
            return(
              <>
                <div className="card col-6" key={element.id}> 
                     <div className="card-body">
                         <h5 >{element.albumTitle}</h5>

                          <h5>Album Photos</h5>
                          {element.photos.slice(0,90)?.map((data) => {  
                            return(
                              <div key={data.id}> 
                                <ul key={data.id}> 
                                  <li>{data.photoTitle}</li>
                                  <img src={data.imageUrl} className="card-img-top m-1"/>
                                </ul> 
                              </div>
                              
                            )})}
                    </div>
                  </div>
              </>
            )
          }
        )}  
        </div>

    </div>
  )
}

export default AlbumInfo