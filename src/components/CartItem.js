import { Badge, Button, ListGroup } from "react-bootstrap";
import { useState } from "react";



function CartItem({ product, removeFromCart, changeCount }) {
    const [colorButton, setColorButton] = useState(false);


    return <ListGroup.Item key={product.id}> <img src={product.img} className="product-img"/>{product.title}
        <span className="text-danger"> ${product.price}</span>

        <Button variant="secondary" size="sm" disabled={product.count === 1 ? "disabled" : ""}
            className="ml-4 mr-1 text-white cart-item-remove" onClick={() => changeCount(product.id, product.count - 1)}>-</Button>
        {product.count}
        <Button variant="success" size="sm" className="ml-1 text-white cart-item-remove" onClick={() => changeCount(product.id, product.count+1)}>+</Button>

        <Badge bg={colorButton ? "danger" : "secondary"} className="ml-4 text-white cart-item-remove"
            onMouseEnter={() => setColorButton(true)}
            onMouseLeave={() => setColorButton(false)}
            onClick={() => removeFromCart(product.id)}>Remove from cart</Badge> 
        
    </ListGroup.Item>
    
    
}

export default CartItem;