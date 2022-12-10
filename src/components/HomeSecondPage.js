import "./HomeSecondPage.css";
import CarouselGrid from "./CarouselGrid";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom"




function HomeSecondPage() {
    return <div className="second-home-page">
      <div className="second-page-text justify-content-center">
        <p>paintings for soul</p>
        <Link to="/products"><Button className="second-page-button" size="lg" variant="secondary">See more arts</Button></Link>
      </div>
      
      <CarouselGrid />
    </div>
}

export default HomeSecondPage;