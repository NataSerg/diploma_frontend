import "./Home.css";
import { Carousel } from "react-bootstrap";


function Home() {
  
  return <div className="home-container d-flex justify-content-around align-items-center"> 
      
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
      <div className="text-block align-self-start">
        <h5 className="home-text"><span>Keep </span>calm</h5>
        <h5 className="home-text">and <span>enjoy</span></h5>
        <h5 className="home-text">the pictures</h5>
        <h6 className="text-block-small">When something is going wrong, <br /> just relax, drink a cup of coffe... <br /> and buy an awesome painting.</h6>
      

      </div>
  
    
    
     
      
    </div>

}

export default Home;