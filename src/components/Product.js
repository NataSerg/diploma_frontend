import { Card, Button, Col, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
import { useState, useEffect } from "react";
import axios from "axios";


function Product({product, addToCart, setNewCartUpdate, cartItemsArray, currentId, setProductUpdate}) {
    const [cartButton, setCartButton] = useState(false);
    const [colorCartButton, setColorCartButton] = useState(false);
    const [activeWidth, setActiveWidth] = useState('0');
    const [star, setStar] = useState('0');
    const [showAlert, setShowAlert] = useState("d-none");
    
    useEffect(() => {
        setTimeout(() => setShowAlert('d-none'), 4000);
   }, [star])

    useEffect(() => {
        setActiveWidth(product.middle_star);
    }, [product])

    useEffect(() => {
        setRatingWidth(activeWidth);
    }, [activeWidth])

    const setRatingWidth = (value) => {
        document.querySelector(`.rating-active-${product.id}`).style.width = `${value / 0.05}%`;
    }

    const userSetProductRating = async (star, product) => {
         try {
             const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/rating/`,
                 {
                    star,
                    product 
                 }, {
                 headers: {
                     'Content-Type': 'application/json'
                 }
             })
             setProductUpdate(response);
             setStar(response.data.star);
             setShowAlert('');
         } catch (error) {
             console.log(error)
     }
}


    return <Col sm={6} md={4} lg={3} className={'d-flex flex-column'}>
        <div className={`rating d-flex`}>
                <div className="rating-body">
                    <div className={`rating-active rating-active-${product.id}`}></div>
                    <div className="rating-items">
                        <input type="radio" className={`rating-item rating-item-${product.id}`} value="1" name="rating"
                            onMouseEnter={() => setRatingWidth("1")}
                            onMouseLeave={() => setRatingWidth(activeWidth)} onClick={() => userSetProductRating(1, product.id)} />
                        <input type="radio" className={`rating-item rating-item-${product.id}`} value="2" name="rating"
                            onMouseEnter={() => setRatingWidth("2")}
                            onMouseLeave={() => setRatingWidth(activeWidth)} onClick={() => userSetProductRating(2, product.id)} />
                        <input type="radio" className={`rating-item rating-item-${product.id}`} value="3" name="rating"
                            onMouseEnter={() => setRatingWidth("3")}
                            onMouseLeave={() => setRatingWidth(activeWidth)} onClick={() => userSetProductRating(3, product.id)} />
                        <input type="radio" className={`rating-item rating-item-${product.id}`} value="4" name="rating"
                            onMouseEnter={() => setRatingWidth("4")}
                            onMouseLeave={() => setRatingWidth(activeWidth)} onClick={() => userSetProductRating(4, product.id)} />
                        <input type="radio" className={`rating-item rating-item-${product.id}`} value="5" name="rating"
                            onMouseEnter={() => setRatingWidth("5")}
                            onMouseLeave={() => setRatingWidth(activeWidth)} onClick={()=> userSetProductRating(5, product.id)} />
                    </div>
                </div>
            <div className="rating-value">{activeWidth}</div>
            <Alert className={`mb-0 ml-4 ${showAlert}`} variant="dark">Your mark is {star}</Alert>
            </div>
        
        <Card style={{ border: "none" }} className="text-dark card-item mt-3"
        onMouseEnter={() => setCartButton(true)}
        onMouseLeave={() => setCartButton(false)}
        onMouseMove={() => setNewCartUpdate('')}> 
        <Card.Img variant="top" src={product.image} className="card-image"/>
            <Card.Body> {(cartItemsArray.filter(product => product.id == currentId)).length ?
                <Button variant="danger" disabled="disable"
                    className={cartButton ? "added-to-cart-button" : "d-none added-to-cart-button"}>Allready in cart</Button> :
                <Button className={cartButton ? "add-to-cart-button" : "d-none add-to-cart-button"}
                    variant={colorCartButton ? "success" : "secondary"}
                    onMouseEnter={() => setColorCartButton(true)}
                    onMouseLeave={() => setColorCartButton(false)}
                    onClick={() => addToCart(product.id, product.quantity)}>Add to Cart</Button>}
        <Link to={`/products/${product.id}`} className="text-dark"><Card.Title>{product.title}</Card.Title></Link>     
        <Card.Title>${product.price}</Card.Title>       
        </Card.Body>
        </Card>
    </Col>
}

export default Product;

