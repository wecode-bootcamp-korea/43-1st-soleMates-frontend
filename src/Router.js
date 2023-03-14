import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';
import ProductList from './pages/ProductList/ProductList';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Account />} />
        <Route path="/signup" element={<Account />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
