import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect } from "react";

function MyNav(props) {
    useEffect(()=>{console.log('NAVbar component state has been rendered or re-rendered')});
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
                    <span>{props.students[Math.floor(Math.random()*props.students.length)]}</span>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;