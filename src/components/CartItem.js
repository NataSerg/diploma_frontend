import { Badge, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCart } from "../reducers/userReducer";


function CartItem({ item, setNewCartUpdate, changeCount, deleteFromCart}) {
    const [colorButton, setColorButton] = useState(false);
    const dispatch = useDispatch();


    return <ListGroup.Item> <img src={item.product.img}
        className="product-img" onMouseMove={() => setNewCartUpdate('')} />{item.product.title}
        <span className="text-danger"> ${item.product.price}</span>
        <Button variant="secondary" size="sm" disabled={item.quantity === 1 ? "disabled" : ""}
            className="ml-4 mr-1 text-white cart-item-remove" onClick={() => changeCount(item.id, item.quantity - 1)}>-</Button>
        {item.quantity}
        <Button variant="success" size="sm" className="ml-1 text-white cart-item-remove" onClick={() => changeCount(item.id, 1)}>+</Button>

        <Badge bg={colorButton ? "danger" : "secondary"} className="ml-4 text-white cart-item-remove"
            onMouseEnter={() => setColorButton(true)}
            onMouseLeave={() => setColorButton(false)}
            onClick={() => deleteFromCart(item.id)}>Remove from cart</Badge> 
        
    </ListGroup.Item>
    
    
}

export default CartItem;