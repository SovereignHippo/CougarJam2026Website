import React from 'react'
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route,  HashRouter } from 'react-router-dom';
import Home from './components/pages/Home.js'
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import SignUp from './components/pages/SignUp.js';
import Footer from './components/Footer'
import Terminal from './components/pages/Terminal.js';

function App() {


  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/services' exact Component={Services}/>
          <Route path='/products' exact Component={Products}/>
          <Route path='/sign-up' exact Component={SignUp}/>
          <Route path='/terminal' exact Component={Terminal}/>
        </Routes>

        
        <Footer />
      </HashRouter>
      
    </>
  );
}

export default App;
