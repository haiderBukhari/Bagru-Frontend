import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

import Home from './Pages/Home';
import Courses from './Pages/CourseMain';
import CourseDetails from './Pages/Courses';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Pricing from './Pages/Pricing';

const Main = () => {
  return (

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/courses/:name/details/' element={<CourseDetails/>} />
        <Route path='/courses/:name/:semester/details/' element={<CourseDetails/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/price' element={<Pricing/>} />
      </Routes>
  );
}

export default Main;