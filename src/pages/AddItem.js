import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';



function AddItem({setItems,items}) {

    const [image,setImage] = useState('');
    const [item, setItem] = useState({ price: "", name: "" });


  const changeItem = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }


  const saveItem = () => {
    setItems([...items, item])
    setItem({ price: "", name: "" });
    toast("New Item was added !",{
        type:'success'
    });
  }


  const imageUpload=(e)=>{
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        setImage(reader.result)
    });

    reader.readAsDataURL(file);
  }


  return (
    <div>



<div className="col col-6 m-auto pupup-body mt-5">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input value={item.name} onChange={changeItem} name='name' type="text" className="form-control" placeholder="Ibiraha" />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input value={item.price} onChange={changeItem} name='price' type="number" className="form-control" placeholder="299 rwf" />
          </div>


          <div className="mb-3">
            <label className="form-label">image</label>
            <input name='image' onChange={imageUpload} type="file" className="form-control" />
          </div>

          <div className='preview'>
          <img style={{width:"50px"}} alt='' src={image}  />
          </div>

          <div className="mb4">
            <button className='btn btn-warning' onClick={saveItem}>SAVE</button>

            <Link to={"/"} className="btn btn-danger">Go to home</Link>
          </div>
      </div>



    </div>
  )
}

export default AddItem