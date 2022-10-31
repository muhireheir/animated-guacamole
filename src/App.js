import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import AddItem from './pages/AddItem';
import Navbar from './components/Navbar';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';






function App() {


  const [item, setItem] = useState({ price: "", name: "" });
  const [visible,setVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [image,setImage] = useState('');


  const changeItem = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value })
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

    <Navbar />

    
    <div className="container mt-5">

      <Routes>
        <Route path='/'  element={<Home  togglePopUp={togglePopUp} items={items}/>}/>
        <Route path='/add'  element={<AddItem  setItems={setItems}  items={items}/>}/>
      </Routes>     
    </div>

    <ToastContainer />





      {/* end on modal pupup */}

    </>
  );
}

export default App;
