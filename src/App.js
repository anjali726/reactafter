import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import about from './components/pages/About'
import NavBar from './components/inc/NavBar';
import Dashboard from './components/pages/Dashboard'
function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/Contact' exact Component={Contact}></Route>
        <Route path='/about' exact Component={about}></Route>
        <Route path='/Dashboard' exact Component={Dashboard}></Route>

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
