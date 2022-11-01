import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const AddProduct = ({setItems,items}) => {

    const [item, setItem] = useState({ price: "", title: "" });
    // const [image,setImage] = useState('');

    const changeItem = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
      }


      const imageUpload=(e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
    
        reader.addEventListener("load", () => {
            // setImage(reader.result)
        });
    
        reader.readAsDataURL(file);
      }


      const addItem = () => {
        setItems([...items, item])
        setItem({ price: "", title: "" })
      }

  return (
    <div>
    <div className="col col-6 m-auto pupup-body mt-5">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input value={item.title} onChange={changeItem} name='title' type="text" className="form-control" placeholder="Ibiraha" />
        </div>
        <div className="mb-3">
          <label className="form-label">Price</label>
          <input value={item.price} onChange={changeItem} name='price' type="number" className="form-control" placeholder="299 rwf" />
        </div>


        <div className="mb-3">
          <label className="form-label">image</label>
          <input name='image' onChange={imageUpload} type="file" className="form-control" />
        </div>

      
        <div className="mb4">
          <button onClick={addItem} className='btn btn-warning'>SAVE</button>
          <Link className='btn btn-danger ml-5' to="/">Back to homepage</Link>
        </div>
      </div>
    </div>
  )
}

export default AddProduct