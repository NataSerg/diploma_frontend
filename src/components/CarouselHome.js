import { Carousel } from "react-bootstrap";
import "./CarouselHome.css";

function CarouselHome() {
    return <Carousel>
  <Carousel.Item>
    <img
      className="d-block carousel-img"
      src="/images/7.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-img"
      src="/images/8.jpg"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-img"
      src="/images/9.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
    </Carousel>
}

export default CarouselHome;