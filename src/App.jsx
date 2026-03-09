import { useState } from 'react'

import './App.css'
import Navbar from './components/navbar/navbar'
import CustomCursor from './components/CustomCursor'
import Header from './components/Header/Header'
import BrandMarquee from "./components/BrandMarquee";
import Services from './components/Services'
import Mission from './components/Mission'
import HeroSection from './components/HeroSection'
import ClientResults from './components/ClientResults'
import HowWeWork from './components/HowWeWork'
import Testimonial from './components/Testimonial'
import WhyChooseUs from './components/WhyChooseUs'
import Footer from './components/Footer'
function App() {

  return (
    <>
     <Navbar/>
     <CustomCursor/>
     <Header/>
     <BrandMarquee />
     <Services/>
     <Mission/>
     <HeroSection/>
     <ClientResults/>
     <HowWeWork/>
     <Testimonial/>
     <WhyChooseUs/>
     <Footer/>
    </>
  )
}

export default App
