import React, { Component } from 'react'
import Con from './includes/Contacsec'

export default class contact extends Component {
  render() {
    return (
      

<div className="container">
    <div className="row">
      <div className="col-md-8 mt-5">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27509.561782470202!2d77.74145278551528!3d30.473069581441937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2fb901fe8a51%3A0x1fa531562e47f5fe!2sVikasnagar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1689104361718!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
      <div className="col-md-4 mt-5">
        <Con/>
           </div>
    </div>
</div>
    )
  }
}
