import React from 'react';
import Landing from './components/landing/Landing';
import Search from './components/Search/Search';
import Contact from './components/Info/Contact';
import AboutUs from './components/Info/AboutUs';
import Product from './components/products/Product';
import {Route, Routes } from 'react-router-dom';
import "./styles.css";

const App = () => {
  return (
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/about" element={<AboutUs/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/search" element={<Search/>} />
          <Route exact path="/products" element={<Product/>} />
        </Routes>

  )
}

export default App;