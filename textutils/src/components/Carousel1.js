import React from 'react'

export default function carousel1() {
  return (
    <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="Designer1.png" className="d-block w-100" alt="First Slide" width="90" height="800"/>
    </div>
    <div className="carousel-item">
      <img src="Designer2.jpeg" className="d-block w-100" alt="Second Slide" width="90" height="800"/>
    </div>
    <div className="carousel-item">
      <img src="Designer3.jpeg" className="d-block w-100" alt="Third Slide" width="90" height="800"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}
