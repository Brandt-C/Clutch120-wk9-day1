import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="navbar-brand" to="/shop">shop</Link>
                        <Link className="navbar-brand" to="/">home</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;