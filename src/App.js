
import './App.css';

import Home from './components/Home';
import Products from './components/Products';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       {/* <Route path='product' element={<Product/>}></Route> */}
       <Route path='/products' element={<Products/>}> </Route> 
       <Route path='/products/:id' element={<Product/>}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
