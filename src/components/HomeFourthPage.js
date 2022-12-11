import "./HomeFourthPage.css";
import { Carousel } from "react-bootstrap";
import CarouselHome from "./CarouselHome";
import { Col} from "react-bootstrap";



function HomeFourthPage() {
  return <>
      <Col lg={6} md={8} xs={10} className="logo d-flex flex-column justify-content-center mt-5">
        <p>LEDE</p>
        <p>NOVA</p>
        <p>ART</p>
      </Col>
      <Col lg={3} md={5} xs={5} className="ledenova-art-block d-flex flex-column justify-content-center mt-5">
        <CarouselHome className="first-page-carousel"/>        
      </Col>
      <Col lg={3} md={5} xs={5} className="ledenova-art-block d-flex flex-column justify-content-center mt-5">
        <CarouselHome className="first-page-carousel"/>
        <CarouselHome className="first-page-carousel"/>
    </Col>
  </>
}

export default HomeFourthPage;