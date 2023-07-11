import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // <nav className="navbar" style={`background-color: #e3f2fd`}>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
    <Link className="navbar-brand" to="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse container-fluid" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        
      </div>
      <div className='ms-auto'>
        <form className="d-flex " role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success " type="submit">Search</button>
    </form>
    </div>
    </div>
    
  </div>
    </nav>
  )
}