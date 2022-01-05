import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Navbar from './components/Navbar';
import Books from './components/pages/Books';
import Computers from './components/pages/Computers';
import HouseHolds from './components/pages/HouseHolds';
import KitchenUtensils from './components/pages/KitchenUtensils';
import Smartfons from './components/pages/Smartfons';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import AboutProduct from './components/AboutProduct';
import Cart from './components/Cart';
import {addToCart} from './store/cartproduct';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <Routes>
        <Route path={'/'} element={<Books/>} />
        <Route path={'/computers'} element={<Computers/>} />
        <Route path={'/households'} element={<HouseHolds/>} />
        <Route path={'/kitchenutensils'} element={<KitchenUtensils/>} />
        <Route path={'/smartfons'} element={ <Smartfons/>} />
        <Route path={'/:id'} element={<AboutProduct/>} />
      </Routes>
      <ToastContainer position="top-left" />
    </div>
  );
}

export default connect(({cartproduct:{cartProducts}})=>({cartProducts}),{addToCart} )(App);