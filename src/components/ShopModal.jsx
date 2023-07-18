import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ShopModal(props) {
    console.log(props);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.m.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>Genre: {props.m.genre}</ListGroup.Item>
                        <ListGroup.Item>Length: {props.m.length}</ListGroup.Item>props.
                        <ListGroup.Item>Rating: {props.m.rating}</ListGroup.Item>
                        <ListGroup.Item>Price: ${props.m.price}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Body>
                    <p>{props.m.desc}</p>
                </Modal.Body>
                <Modal.Body>
                    <Link href={props.m.trailer} target="_blank">Check out trailer!</Link>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    );
}

export default ShopModal;

