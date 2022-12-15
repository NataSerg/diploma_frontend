import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import {BsCart4} from "react-icons/bs";
import "./Header.css";
import Contacts from "./Contacts";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/userReducer";


function Header({totalCount}) {
    const location = useLocation();
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return <><Navbar bg="white" variant="light" sticky="top" className="header" >
        <Container>
            <Link to="/" className="navbar-brand">Home</Link>
            <Nav className="me-auto">
                
                <Link to="/cart" className={`cart-in-header ${location.pathname === "/cart" ? "nav-link active" : "nav-link"}`}><BsCart4 className="cart-icon" /><Badge bg={totalCount===0 ? "white" : "success"} className={totalCount===0 ? "cart-count-white" : "cart-count"}>{totalCount}</Badge></Link>
                <Link to="/products" className={location.pathname === "/products" ? "nav-link active" : "nav-link"}>Products</Link>
                {isAuth && <Link to="/" className="nav-link" onClick={() => dispatch(logout())}>Log out</Link>}
                {!isAuth && <NavDropdown title="Log in" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/authorization" className={location.pathname === "/authorization" ? "nav-link active text-center" : "nav-link text-center"}>Log in</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/registartion" className={location.pathname === "/registartion" ? "nav-link active text-center" : "nav-link text-center"}>Create account</NavDropdown.Item>
                </NavDropdown>}
            </Nav>
        </Container>
    </Navbar>
        <Contacts /> 
        </>
}

export default Header;