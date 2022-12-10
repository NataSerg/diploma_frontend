import "./HomeThirdPage.css";
import { useState } from "react";
import { Carousel } from "react-bootstrap";


function HomeThirdPage() {


  return <div className="d-flex about-me-block justify-content-center">
      
    <div className="home-carousel">
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block carousel-img"
      src="/images/13.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-img"
      src="/images/2.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-img"
      src="/images/12.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>  
</div>
      
      
      <div className="d-flex flex-column about-me-column justify-content-between">
        <div>
          <p>Dogs or cats? Both, if they aren't in my flat.</p>
        </div>
        <div className="about-me">About me <span>some important facts</span></div>
        <div>
          <p>Love sleeping, but "sleeping" doesn't love me. Sad story.</p>
        </div>
      </div>
      <div className="d-flex flex-column about-me-column justify-content-between">
        <div>
          <p className="my-name">My name is Elizabeth and I love drawing.</p>
        </div>
        <div>
          <p>I remember every face I've ever seen before.</p>
        </div>
        <div>
          <p>I'm sure, that everyone is beautiful in his own way.</p>
        </div>
      </div>

        
      </div>
}

export default HomeThirdPage;