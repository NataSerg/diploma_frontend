import "./Home.css";
import { Col, Carousel } from "react-bootstrap";




function Home() {
  
  return <> 
      <div className="home-container d-flex flex-column justify-content-center">
        <div className="first-words"><img className="home-image" src="/images/3.jpg" />BREATHE<img className="home-image" src="/images/1.jpg" /></div>
        <div className="first-words"><img className="home-image" src="/images/13.jpg" /><img className="home-image" src="/images/12.jpg" />DRAW<img className="home-image" src="/images/22.jpg" /></div>
        <div className="first-words"><img className="home-image" src="/images/2.jpg" />INSPIRE <img className="home-image" src="/images/24.jpg" /></div>
         
      <p>Creative drawings espessially for you</p>
      <p>Beauty will save the world</p>
      <p>The warmiest wishes for you through marvelous postcards</p>
    
      </div>
     
      
    </>

}

export default Home;