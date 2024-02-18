import React,{ useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function PhotoForm() {
    const [name,setName] = useState("")
    /* eslint-disable no-unused-vars */
    const [data,setData] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();

    //submit data from the form
    function handleSubmit(e){ 
        e.preventDefault()
        
        fetch(`https://photogalleryapi.onrender.com/photos/${id}`, { 
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photoTitle: name  
          }),
        })
          .then((res) => res.json())
          .then((result) => {
            setData(result)
            alert("Edit Successful!") 
             navigate('/photo')  
          }) 
          .catch((err) => console.log('error: ', err))
      }
      //console.log(data) 

  return (
    <div className='container m-5 d-flex justify-content-center w-50'> 
        
        <form onSubmit={handleSubmit}>
            <h5>Edit Name</h5> 
            <div className="form-group">
                <label>Name</label>  
                <input type="text" id='name' className="form-control" value={name} onChange={(e) =>  setName(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
    </div>
  )
}

export default PhotoForm