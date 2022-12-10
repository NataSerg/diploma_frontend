import "./HomeFourthPage.css";
import { Carousel } from "react-bootstrap";
import CarouselHome from "./CarouselHome";


function HomeFourthPage() {
    return <div className="d-flex align-items-center justify-content-center">
      <div className="logo d-flex flex-column">
        <p>LEDE</p>
        <p>NOVA</p>
        <p>ART</p>
      </div>
      <div className="d-flex ledenova-art-block align-items-center">
        <div className="block-one"> 
          <CarouselHome />
        </div>
        <div className="block-two d-flex flex-column">
          <CarouselHome />
          <CarouselHome />
        </div>
        <div className="block-three">
          <CarouselHome />
        </div>
      </div>
    </div>
}

export default HomeFourthPage;