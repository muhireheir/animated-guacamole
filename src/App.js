import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './componets/Navbar';
import {Routes,Route}  from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';



function App() {


  const [items, setItems] = useState([]);
  return (
    <>

    <Navbar />




    <div className="container mt-5">
      <Routes>
        <Route path='/' element={<Home items={items} />} />
        <Route path='/addnew' element={<AddProduct setItems={setItems} items={items}  />} />
      </Routes>
    </div>





      {/* end on modal pupup */}

    </>
  );
}

export default App;
