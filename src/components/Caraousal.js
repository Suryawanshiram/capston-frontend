import React from 'react'

function Caraousal() {
  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
        
        <div class="carousel-inner" id='carousel'>
        <div class="carousel-caption" style={{zIndex:"10"}}>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </form>
            </div>

          <div class="carousel-item active">
            <img src="https://source.unsplash.com/random/900×700?food" class="d-block w-100" style={{filter:"brightness(30%)"}} alt="burger" />
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/random/900×700?pizza" class="d-block w-100" style={{filter:"brightness(40%)"}} alt="pizza" />
          </div>
            <div class="carousel-item">
            <img src="https://source.unsplash.com/random/900×700?tea" class="d-block w-100" style={{filter:"brightness(50%)"}} alt="tea" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    
  )
}

export default Caraousal