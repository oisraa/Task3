import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Pages/Home';
import Properties from './components/Pages/Properties';
import PropertyDetails from './components/Pages/PropertyDetails';
import ContactUs from './components/Pages/ContactUs';


function App() {
  return (
    <div className="App">
     
      <TopBar/>
      <NavBar />
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/properties'element={<Properties/>}/>
<Route path='/property-details'element={<PropertyDetails/>}/>
<Route path='/contact'element={<ContactUs/>}/>
      </Routes>
     
      <Footer/>
  
    </div>
  );
}

export default App;