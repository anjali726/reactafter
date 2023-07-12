import React, { Component } from 'react'
import Sidebar from './includes/Sidebar'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 bg">
            <Sidebar />
          </div>
          <div className="col-md-9">
            
          </div>
        </div>
      </div>
      </div>
    )
  }
}
