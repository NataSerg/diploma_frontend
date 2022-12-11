import "./HomeSecondPage.css";
import { Carousel, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom"


function HomeSecondPage() {
  return <>
      <Col xs={9} sm={7} md={6} lg={4} className="d-flex flex-column carousel-grid-item first-column">
      <div className="second-page-text justify-content-center">
        <p>paintings for soul</p>
        <Link to="/products"><Button className="second-page-button" size="lg" variant="secondary">See more arts</Button></Link>
    </div>
      <div className="d-flex">
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/1.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/2.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/3.jpg"
                      alt="First slide"/>
                </Carousel.Item>
          </Carousel>
      
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/1.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/2.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/3.jpg"
                      alt="First slide"/>
              </Carousel.Item>
          </Carousel>
      </div>
    
        <div className="d-flex">
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/4.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/5.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/6.jpg"
                      alt="First slide"/>
                </Carousel.Item>
          </Carousel>
      
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/4.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/5.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/6.jpg"
                      alt="First slide"/>
              </Carousel.Item>
          </Carousel>
      </div>
    </Col>
    <Col xs={9} sm={7} md={6} lg={4} className="carousel-grid-item second-column">
      <div className="d-flex">
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/1.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/2.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/3.jpg"
                      alt="First slide"/>
                </Carousel.Item>
          </Carousel>
      
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/1.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/2.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/3.jpg"
                      alt="First slide"/>
              </Carousel.Item>
          </Carousel>
      </div>
    
        <div className="d-flex">
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/4.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/5.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/6.jpg"
                      alt="First slide"/>
                </Carousel.Item>
          </Carousel>
      
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/4.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/5.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/6.jpg"
                      alt="First slide"/>
              </Carousel.Item>
          </Carousel>
      </div>
    </Col>
    <Col xs={9} sm={7} md={6} lg={4} className="carousel-grid-item third-column">
      <div className="d-flex">
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/1.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/2.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/3.jpg"
                      alt="First slide"/>
                </Carousel.Item>
          </Carousel>
      
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/1.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/2.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/3.jpg"
                      alt="First slide"/>
              </Carousel.Item>
          </Carousel>
      </div>
    
        <div className="d-flex">
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/4.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/5.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/6.jpg"
                      alt="First slide"/>
                </Carousel.Item>
          </Carousel>
      
          <Carousel>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/4.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/5.jpg"
                      alt="First slide"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img className="d-block carousel-img"
                      src="/images/6.jpg"
                      alt="First slide"/>
              </Carousel.Item>
          </Carousel>
      </div>
    </Col>
  </>
  
}

export default HomeSecondPage;