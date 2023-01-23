import React from 'react';
import './App.css';
import Advantage from './components/Advantage/Advantage';
import Coupon from './components/Coupon/Coupon';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Questions from './components/Questions/Questions';
import Quote from './components/Quote/Quote';

function App() {
  return (
    <>
     <Header />
     <Home />
     <Product />
     <Advantage />
     <Quote />
     <Coupon />
     <Questions />
     <Footer />
    </>
  );
}

export default App;
