import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AllStudents from './AllStudents';
import AddStudent from './AddStudent';
import AllTeachers from './AllTeachers';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/AddStudent' element={<AddStudent />} />
        <Route path='/AllStudents' element={<AllStudents />} />
        <Route path='/AllTeachers' element={<AllTeachers />} />
      </Routes>
  </BrowserRouter>
 
);


