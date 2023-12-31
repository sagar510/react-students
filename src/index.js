import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AllStudents from './AllStudents';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const NavBar = ()=> {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/AllStudents">AllStudents</Link>
    </nav>

  );
}

root.render(
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/AllStudents' element={<AllStudents />} />
      </Routes>
  </BrowserRouter>
 
);


