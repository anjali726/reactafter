import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import contact from './components/pages/contact'
import about from './components/pages/About'
import NavBar from './components/inc/NavBar';
function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/contact' exact Component={contact}></Route>
        <Route path='/about' exact Component={about}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
