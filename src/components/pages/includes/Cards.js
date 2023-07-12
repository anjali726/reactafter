import React from 'react'
import pic from '../../photos/pic.jpg'
import pic3 from '../../photos/pic3.jpg'
import pic2 from '../../photos/pic2.jpg'
export default function Cards() {
  return (
    <>
      <div className="container mt-3 mb-2">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={pic} alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Card 1</h5>
              <div className='sub-underline mb-2'></div>
              <p className="card-text">This is the first card.</p>
              <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item"><a href="#" class="btn btn-primary">Go somewhere</a></li>
  </ul>
              
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={pic2} alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Card 2</h5>
              <div className='sub-underline mb-2'></div>
              <p className="card-text">This is the second card.</p>
              <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item"><a href="#" class="btn btn-primary">Go somewhere</a></li>
  </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <img className="card-img-top" src={pic3} alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Card 3</h5>
              <div className='sub-underline mb-2'></div>
              <p className="card-text">This is the third card.</p>
              <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item"><a href="#" class="btn btn-primary">Go somewhere</a></li>
  </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
