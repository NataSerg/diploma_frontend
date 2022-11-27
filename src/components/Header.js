import { Navbar, Nav, Container, Badge } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import {BsCart4} from "react-icons/bs";
import "./Header.css";

function Header({totalCount}) {
    const location = useLocation();

    return <Navbar bg="white" variant="light" sticky="top" className="header" >
        <Container>
            <Link to="/" className="navbar-brand">Home</Link>
            <Nav className="me-auto">
                <Link to="/cart" className={`cart-in-header ${location.pathname === "/cart" ? "nav-link active" : "nav-link"}`}><BsCart4 className="cart-icon" /><Badge bg={totalCount===0 ? "white" : "success"} className={totalCount===0 ? "cart-count-white" : "cart-count"}>{totalCount}</Badge></Link>
                <Link to="/products" className={location.pathname === "/products" ? "nav-link active" : "nav-link"}>Products</Link>
                <Link to="/registartion" className={location.pathname === "/registartion" ? "nav-link active" : "nav-link"}>Log in</Link>

            </Nav>
        </Container>
    </Navbar>
}

export default Header;