import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { Col, Spinner } from "react-bootstrap";

function SingleProduct() {
    const { productId } = useParams();
    const products = useOutletContext();
    const [singleProduct, setSingleProduct] = useState({});

    useEffect(() => {
        let selectedProduct = products.filter(product => product.id === +productId)[0];
        if (selectedProduct) {
            setSingleProduct(selectedProduct);
        }
    }, [products, productId])
    
    return <Col>
        <h1>Selected Product:</h1>
        {singleProduct.id ? <div>
            <h4>Name:</h4>
            <p>{singleProduct.brand} {singleProduct.title}</p>
            <h4>Price:</h4>
            <p className="text-danger">${singleProduct.price}</p>
        </div> : <Spinner animation="border" role="status">
  <span className="sr-only">Loading...</span>
</Spinner>}
    </Col>
}

export default SingleProduct;