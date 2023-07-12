import React from 'react'

export default function Contacsec() {
  return (
    <div className=' custom-card'>
    <div className="container">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Contact Form</h5>
        <form>
          <div className="form-group">
            <label for="name" className='py-2'>Name:</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name"/>
          </div>
          <div className="form-group">
            <label for="email" className='py-2'>Email:</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email"/>
          </div>
          <div className="form-group">
            <label for="message" className='py-2 '>Message:</label>
            <textarea className="form-control" id="message" placeholder="Enter your message"></textarea>
          </div>
          <button type="submit" className="mt-2 btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}
