// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './componets/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import axios from 'axios';






// webpack
//  babel


//fullfiled
//rejected
//Waiting/pending


function App() {

  const [items, setItems] = useState([]);

  
  const fetchProducts = async () => {
    const response = await axios.get("https://dummyjson.com/products?limit=2");
    setItems(response.data.products);
  }

  fetchProducts();
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Routes>
          <Route path='/' element={<Home items={items} />} />
          <Route path='/addnew' element={<AddProduct setItems={setItems} items={items} />} />
        </Routes>
      </div>





      {/* end on modal pupup */}

    </>
  );
}

export default App;
