import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import About from "./components/About";
import Banks from "./components/Banks";
import Contact from "./components/Contact";
import Careers from "./components/Carrers";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
     <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>

      {/* Content */}
      <Navbar />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route/>
        <Route path="/about" element={<About/>}/>
        <Route path="/banks" element={<Banks/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/careers" element={<Careers/>}/>
      </Routes>
      
      
      <Footer/>
    </div>
  );
};

export default App;