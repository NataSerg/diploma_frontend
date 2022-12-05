import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Spinner, Button} from "react-bootstrap";
import "./SingleProduct.css";

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [colorCartButton, setColorCartButton] = useState(false);
    const [colorButton, setColorButton] = useState(false);


    useEffect(() => {
        fetch(`https://lionfish-app-3rfne.ondigitalocean.app/api/products/${id}`).then(res => res.json()).then(data => {
            setProduct(data);
        })
    }, [id]);

  

    return <Col>
        {product ? <div className="single-product-block d-flex justify-content-center align-items-center">
            <img className="single-product-image" src={product.image} />
            <div className="single-product-text">
                <p>{product.title}</p>
                <p>${product.price}</p>
                <div><Button variant={colorCartButton ? "success": "secondary"} size="lg"
                    onMouseEnter={() => setColorCartButton(true)}
                    onMouseLeave={() => setColorCartButton(false)}>Add to Cart</Button></div>
                <div><Link to="/products/">
                    <Button variant={colorButton ? "success" : "secondary"}
                        onMouseEnter={() => setColorButton(true)}
                        onMouseLeave={() => setColorButton(false)}>Continue shopping</Button></Link></div>
            </div>
        </div> : <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>}
    </Col>
}

export default SingleProduct;