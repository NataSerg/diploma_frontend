import { useState } from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ product, addToCart }) {
    const [cartButton, setCartButton] = useState(false);
    const [colorCartButton, setColorCartButton] = useState(false);


    return <Col sm={6} md={4} lg={3} className={'d-flex'}>
        <Card style={{ border: "none" }} className="text-dark card-item"
        onMouseEnter={() => setCartButton(true)}
        onMouseLeave={() => setCartButton(false)}> 
        <Card.Img variant="top" src={product.img} className="card-image" />
        <Card.Body>
        <Button className={cartButton ? "add-to-cart-button" : "d-none add-to-cart-button"} 
            variant={colorCartButton ? "success": "secondary"}
            onMouseEnter={() => setColorCartButton(true)}
            onMouseLeave={() => setColorCartButton(false)}
            onClick={() => addToCart(product.id)}>Add to Cart</Button>
        <Link to={`/products/${product.id}`} className="text-dark"><Card.Title>{product.title}</Card.Title></Link>     
        <Card.Title>${product.price}</Card.Title>             
        </Card.Body>
        </Card>
    </Col>
}

export default Product;

