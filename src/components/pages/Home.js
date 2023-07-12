import React, { Component } from 'react'
import Slider from '../inc/Slider'
import Types from './includes/Types'
import Cards from './includes/Cards'
import Footer from './includes/Footer'
export default class Home extends Component {
  render() {
    return (
      <div>
        <Slider/>
        <figure class="text-center p-2">
  <blockquote class="blockquote">
    <p>A well-known quote, contained in a blockquote element.</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Someone famous in <cite title="Source Title">Source Title</cite>
  </figcaption>
</figure>

<section class="container">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="text-left">Section Heading</h2>
        <div class="underline"></div>
        <p class="pt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sagittis tincidunt diam, eget tincidunt sapien rutrum eu. Sed eu tellus faucibus, sodales dui vitae, pellentesque urna.</p>
      </div>
    </div>
  </section>
<Types/>
<Cards/>
<Footer/>

  

      </div>
    )
  }
}
