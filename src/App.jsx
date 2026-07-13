import { useState } from 'react';
import './App.css'
import Navbar from './components/layout/Navbar';
import HeroCarousel from './components/carousel/HeroCarousel';
import WhatWeDo from './components/offerings/WhatWeDo';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <Footer />

    </>
  )
}

export default App
