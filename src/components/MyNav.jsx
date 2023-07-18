import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import '../css/nav.css'

function MyNav() {
    // useEffect(()=>{console.log('NAVbar component state has been rendered or re-rendered')});
    const { cart, setCart } = useContext(DataContext);
    
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="navbar-brand" to="/shop">shop</Link>
                        <Link className="navbar-brand" to="/">home</Link>
                        <Link className="navbar-brand" to="/cart">cart</Link>
                    </Nav>
                    {
                    cart.size === 0? 
                    <Link className="navbar-brand" to="/shop"><span><i id="cart-logo" className="fa-solid fa-cart-shopping"></i></span></Link> 
                    :
                    <Link className="navbar-brand" to="/cart"><span>{cart.size} | {cart.total.toFixed(2)}</span>
                   <span><i id="cart-logo" className="fa-solid fa-cart-shopping"></i></span></Link> 
                    }
                    
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;