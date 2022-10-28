import logo from './logo.svg';
import './App.css';
import { useState } from 'react';





function App() {


  const [item, setItem] = useState({ price: "", name: "" });
  const [visible,setVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [image,setImage] = useState('');


  const changeItem = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
  }


  const addItem = () => {
    setItems([...items, item])
    setItem({ price: "", name: "" })
    togglePopUp();
  }


  const togglePopUp=()=>{
    setVisible(!visible);
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

    <>
    <div className="container mt-5">

      <button className='btn btn-success' onClick={togglePopUp}>ADD NEW ITEM</button>
      <div className="row">
        <div className="col col-6">
          <ul className="list-group">
            {
              items.map(function (item, index) {
                return (<li key={index} className="list-group-item">
                  <div>{item.name}</div>
                  <div>{item.price}</div>
                </li>)
              })
            }

          </ul>
        </div>
        <div>
        </div>
      </div>
    </div>



          {/* opup */}

      <div className='popup' style={{display:visible ? "block":"none"}}>
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
            <button onClick={addItem} className='btn btn-warning'>SAVE</button>

            <button className='btn btn-danger ml-5' onClick={togglePopUp}>CLose</button>
          </div>
        </div>
      </div>



      {/* end on modal pupup */}

    </>
  );
}

export default App;
