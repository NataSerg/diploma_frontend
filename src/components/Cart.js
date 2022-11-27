import "./Cart.css";
import CartItem from "./CartItem";
import { ListGroup, Badge, Button, Col } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import ThemeContext from "../context/ThemeContext";



function Cart({ products, setProducts, totalCount, setTotalCount}) {
    const [total, setTotal] = useState(0);
    const { theme, user } = useContext(ThemeContext);
    const [colorButton, setColorButton] = useState(false);
    const [colorButtonOrder, setColorButtonOrder] = useState(false);


    useEffect(() => {
        
        const newTotal = (products.filter(product => product.addedToCart)).reduce((acc, product) => acc + (product.price * product.count), 0);
        setTotal(newTotal);

        const newTotalCount = (products.filter(product => product.addedToCart)).reduce((acc, product) => acc + product.count, 0);
        setTotalCount(newTotalCount);

        

    }, [products]);

    const changeCount = (id, newCount) => {
        setProducts(products.map(product => product.id === id ? { ...product, count: newCount } : { ...product })); 
    }

     const removeFromCart = id => {
        setProducts(products.map(product => product.id === id ? { ...product, addedToCart: false, count: 1 } : { ...product })); 
    }

   

    return <> <Col>
        <h3 className="text-center">Cart</h3>
    {(JSON.parse(localStorage.getItem("cart"))).length ? 
    <div className={`cart-block ${theme}`}>
        <ListGroup>
        {(JSON.parse(localStorage.getItem("cart"))).map(product =>
            <CartItem
            product={product}
            key={product.id}
            changeCount={changeCount}
            removeFromCart={removeFromCart}/>)}
        </ListGroup>
        <div className="text-center">
            <h5>You are ordering {totalCount} postcards, total is ${total}</h5>
                <p>Your order is sent to {user?.email}</p> 
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
        <div className={`cart-block p-5 d-flex flex-column align-items-center ${theme}`}>
                <h4 className="text-center mb-5">Your cart is empty</h4>
                <Link to="/products/">
                    <Button className="cart-empty-button" variant={colorButton ? "success":"secondary"} size="lg"
                        onMouseEnter={() => setColorButton(true)}
                        onMouseLeave={() => setColorButton(false)}>Continue shopping</Button>
                </Link>

        </div>
    }
    </Col>
        
        
            </>
}

export default Cart;