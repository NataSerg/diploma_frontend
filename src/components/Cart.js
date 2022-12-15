import "./Cart.css";
import CartItem from "./CartItem";
import { ListGroup, Badge, Button, Col } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ThemeContext from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { cartUpdate, addToCart } from "../actions/user";
import axios from "axios";






function Cart({totalCount, setTotalCount}) {
    const [total, setTotal] = useState(0);
    const [colorButton, setColorButton] = useState(false);
    const [colorButtonOrder, setColorButtonOrder] = useState(false);
    const [cartArray, setCartArray] = useState([]);
    const [newCartUpdate, setNewCartUpdate] = useState('');


    const userCart = useSelector(state => state.user.userCart);
    const dispatch = useDispatch()

  useEffect(() => {
    dispatch(cartUpdate())
  }, [newCartUpdate])


    useEffect(() => {
        setCartArray(userCart.map(item => item));
    }, [userCart])

    const changeCount = async (id, quantity) => {
        const accessToken = localStorage.access
        console.log(quantity);
         try {
             const response = await axios.put(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/cart/`,
                 {
                     id,
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


    const deleteFromCart = async (id) => {
        const accessToken = localStorage.access
         try {
             const response = await axios.delete(`https://sea-lion-app-fv7pa.ondigitalocean.app/api/cart/`,
                 {
                     headers: {
                         'Authorization': 'Bearer ' + accessToken,
                         'Content-Type': 'application/json'
                     },
                     data: {
                         id: id,
                     }
                 });
            setNewCartUpdate(response.data)
         } catch (error) {
             console.log(error.response.data.message)
     }
    }

    function sortCartArray(a, b) {
        if (a.id > b.id) {
            return 1;
        } else if (b.id > a.id) {
            return -1;
        } else {
            return 0;
        }
    }
    


    return <> <Col>
        <h3 className="text-center">Cart</h3>
    {cartArray.length ? 
    <div className="cart-block">
        <ListGroup>
        {(cartArray.sort(sortCartArray)).map(item =>
            <CartItem
                item={item}
                key={item.product.id}
                setNewCartUpdate={setNewCartUpdate}
                changeCount={changeCount}
                deleteFromCart={deleteFromCart}/>)}
        </ListGroup>
        <div className="text-center">
            <h5>You are ordering {cartArray.reduce((acc, item) => acc + item.quantity, 0)} arts, total is ${cartArray.reduce((acc, item) => acc + item.price, 0)}</h5>
            <div className="d-flex justify-content-center">
                    <Link to="/products/"><Button className="m-1" variant={colorButton ? "success":"secondary"} size="lg"
                        onMouseEnter={() => setColorButton(true)}
                        onMouseLeave={() => setColorButton(false)}>Continue shopping</Button></Link> 
            <Link to="/cart"><Button className="m-1" variant={colorButtonOrder ? "success" : "secondary"} size="lg"
                        onMouseEnter={() => setColorButtonOrder(true)}
                        onMouseLeave={() => setColorButtonOrder(false)}>To order postcards</Button></Link> 
            </div>
                </div>
        </div> :
        <div className={`cart-block p-5 d-flex flex-column align-items-center`}>
                <h4 className="text-center mb-5">Your cart is empty</h4>
                <Link to="/products/">
                    <Button className="cart-empty-button" variant={colorButton ? "success":"secondary"} size="lg"
                        onMouseEnter={() => setColorButton(true)}
                        onMouseLeave={() => setColorButton(false)}>Continue shopping</Button>
                </Link>
        </div>}
    </Col>        
            </>
}

export default Cart;