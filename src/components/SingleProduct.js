import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Spinner, Button} from "react-bootstrap";
import "./SingleProduct.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cartUpdate } from "../actions/user";

function SingleProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [colorCartButton, setColorCartButton] = useState(false);
    const [colorButton, setColorButton] = useState(false);
    const [cartItemsArray, setCartItemsArray] = useState([]);
    const [newCartUpdate, setNewCartUpdate] = useState('');


    const userCart = useSelector(state => state.user.userCart);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(cartUpdate())
    }, [newCartUpdate])

    useEffect(() => {
        setCartItemsArray(userCart.map(item => item.product));

    }, [userCart])



    useEffect(() => {
        fetch(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/products/${id}`).then(res => res.json()).then(data => {
            setProduct(data);
        })
    }, [id]);

    const addToCart = async (product, quantity) => {
        const accessToken = localStorage.access
         try {
             const response = await axios.post(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/cart/`,
                 {
                     product,
                     quantity
                 }, {
                 headers: {
                     'Authorization': 'Bearer ' + accessToken,
                     'Content-Type': 'application/json'
                 }
             })
             setNewCartUpdate(response.data)
         } catch (error) {
             console.log(error.response.data.message)
     }
}


    return <Col>
        {product ? <div className="single-product-block d-flex justify-content-center align-items-center">
            <img className="single-product-image" src={product.image} />
            <div className="single-product-text">
                <p>{product.title}</p>
                <p>${product.price}</p>
                <div>
                    {(cartItemsArray.filter(product => product.id == id)).length ?
                        <Button variant="danger" disabled="disable">Allready in cart</Button> :
                        <Button variant={colorCartButton ? "success" : "secondary"} size="lg"
                        onMouseEnter={() => setColorCartButton(true)}
                        onMouseLeave={() => setColorCartButton(false)}
                        onMouseMove={() => setNewCartUpdate('')}
                        onClick={() => addToCart(product.id, 1)}>Add to Cart</Button>}</div>
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