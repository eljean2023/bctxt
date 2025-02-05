import React from 'react'

const carousel = () => {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
          
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/BodyshopSystem-1920x860.jpg" className="d-block w-100" alt="Slide 1" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Conecting To All Aspects of the Entire Collision Repair Process</h1>
              <p>Connect With Us For A Demostration.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/Autobodysoftware-1920x860.jpg" className="d-block w-100" alt="Slide 2" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Customized For Your Workflow</h1>
              <h3>Customer Key Aspects Of The System. Reporting, Departements, Business Rules & Workflow</h3>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>
    </div>
  )
}

export default carousel