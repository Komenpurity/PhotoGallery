import React,{ useState } from 'react'
import { useParams } from 'react-router-dom'

function PhotoForm() {
    const [name,setName] = useState("")
    const [data,setData] = useState("")
    const { id } = useParams();

    function handleSubmit(e){ 
        e.preventDefault()
        
        fetch(`/photos/${id}`, { 
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            photoTitle: name  
          }),
        })
          .then((res) => res.json())
          .then((result) => setData(result)) 
          .catch((err) => console.log('error: ', err))
      }
      //console.log(data) 

  return (
    <div className='container m-5 d-flex justify-content-center w-50'> 
        
        <form onSubmit={handleSubmit}>
            <h5>Edit Name</h5> 
            <div className="form-group">
                <label>Name</label> 
                <input type="text" className="form-control" value={name} onChange={(e) =>  setName(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary m-2">Submit</button>
        </form>
    </div>
  )
}

export default PhotoForm