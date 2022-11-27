import { Card, Button, Col } from "react-bootstrap";
import {Link} from "react-router-dom"

function Product({product, addToCart}) {
    return <Col sm={6} md={4} lg={3} className={'d-flex'}>
        <Card style={{border:"none"}} className="text-dark"> 
        <Card.Img variant="top" style={{border:"1px solid rgb(181,174,174)"}} src={product.img} />
        <Card.Body>
        <Link to={`/products/${product.id}`} className="text-dark"><Card.Title>{product.title}</Card.Title></Link>     
        <Card.Title>${product.price}</Card.Title>
            <Button variant="success" onClick={() => addToCart(product.id)}>Add to Cart</Button>             
        </Card.Body>
        </Card>
    </Col>
}

export default Product;

