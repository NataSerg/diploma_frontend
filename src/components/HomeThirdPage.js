import "./HomeThirdPage.css";
import { useState } from "react";
import { Carousel, Col } from "react-bootstrap";


function HomeThirdPage() {


  return <>
    <Col lg={4} md={7} sm={7} xs={10} className="d-flex flex-column about-me-column justify-content-center">
      <div>
        <p className="my-name">My name is Elizabeth and I love drawing.</p>
      </div>
      <div className="about-me">About me <span>some facts</span>
      </div>
      <div>
        <p>Love sleeping, but "sleeping" doesn't love me. Sad story.</p>
      </div>
    </Col>

      <Col lg={4} md={7} sm={7} xs={10} className="d-flex flex-column about-me-column justify-content-center">      
        <div>
          <p>I remember every face I've ever seen before.</p>
        </div>
        <div>
          <p>Dogs or cats? Both, if they aren't in my flat.</p>
        </div>
        <div>
          <p className="point">I'm sure, that everyone is beautiful in his own way.</p>
        </div>
    </Col>
    
    <Col lg={4} md={7} sm={7} xs={10}>
      <div className="home-carousel">
        <Carousel>
          <Carousel.Item>
            <img className="d-block carousel-img"
                src="/images/12.jpg"
              alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img"
                src="/images/13.jpg"
              alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-img"
                src="/images/14.jpg"
              alt="First slide" />
          </Carousel.Item>
        </Carousel>  
      </div>
    </Col>
  </>
}

export default HomeThirdPage;