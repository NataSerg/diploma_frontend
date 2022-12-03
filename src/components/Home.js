import "./Home.css";
import { Carousel } from "react-bootstrap";


function Home() {
  
  return <><div className="home-container d-flex justify-content-around align-items-center"> 
    
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
    
    <div className="d-flex justify-content-around align-items-center about-me">
      <div className="about-me-block">
        <div className="about-me-header">About me</div>
    <div className="about-me-body">Hi, my dear starnger! <br/>There are some important things about me:
    <ul>
      <li>My name is <span>Elizabeth</span> and I love drawing.</li>
      <li>I remember every face I've ever seen before.</li>
      <li>I go crazy over the ice-cream. I can eat it even in the freezing cold.</li>
      <li>I hate crowd and shouty people.</li>
      <li>Dogs or cats? Both, if they aren't in my flat.</li>
      <li>Love sleeping, but "sleeping" doesn't love me. Sad story.</li>
      <li>I'm sure, that everyone is beautiful in his own way.</li>
          </ul>
          </div>
      </div>
      <div>
        <img className="about-me-image" src="/images/24.jpg" />
        
      </div>
    </div>
  </>

}

export default Home;