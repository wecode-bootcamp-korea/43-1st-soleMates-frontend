import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './Components/Header/Banner/Banner';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';
import ProductList from './pages/ProductList/ProductList';
import Detail from './pages/Detail/Detail';
import Cart from './pages/Cart/Cart';

const Router = () => {
  return (
    <BrowserRouter>
      <Banner />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/슈즈" element={<ProductList />} />
        <Route path="/login" element={<Account />} />
        <Route path="/signup" element={<Account />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
