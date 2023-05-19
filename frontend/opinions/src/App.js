import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/components/Home';
import Login from '../src/components/Login';
import Register from '../src/components/Register';
import Contact from '../src/components/Contact';
import About from '../src/components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Articles from './components/Articles';
import Notfaund from './components/Notfaund';


function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>

        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Notfaund" element={<Notfaund />} />
      </Routes>
      <br />
      <Footer />
    </Router>
  );
}

export default App;




