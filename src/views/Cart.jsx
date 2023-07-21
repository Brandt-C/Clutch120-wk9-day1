import { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/cart.css';
import { useDatabase, useUser } from "reactfire";
import { set, ref } from "firebase/database";
import { Link } from "react-router-dom";


const Cart = () => {
    const { cart, setCart } = useContext(DataContext);

    const db = useDatabase();
    const { data:user } = useUser();
    /*
    The plan:
    1. grab// modify cart ---X
    2. clear the whole cart ---X
    3. clear an ITEM from the cart
    4. increment item ---X
    5. decrement item
    */
   const clearCart = () => {
    if (user){
        set(ref(db, 'carts/' + user.uid), null);
    }
    setCart({size:0, total:0, movies:{}});
   }
   const increaseItem = id => {
    let copyCart = {...cart};
    // console.log(copyCart);
    copyCart.size ++;

    copyCart.total += (Math.round(copyCart.movies[id].data.price * 100) / 100);
    copyCart.movies[id].quantity ++;
    if (user){
        set(ref(db, 'carts/' + user.uid), copyCart);
    }
    setCart(copyCart);
   }
   const decreaseItem = id => {
    let copyCart = {...cart};
    copyCart.size --;
    copyCart.total -= (Math.round(copyCart.movies[id].data.price * 100) / 100);
    copyCart.movies[id].quantity > 1 ?
    copyCart.movies[id].quantity -- :
    delete copyCart.movies[id];
    if (user){
        set(ref(db, 'carts/' + user.uid), copyCart);
    }
    setCart(copyCart);
   }
   const removeItem = id => {
    let copyCart = {...cart};
    copyCart.size -= copyCart.movies[id].quantity;
    copyCart.total -= copyCart.movies[id].quantity * (Math.round(copyCart.movies[id].data.price * 100) / 100);
    delete copyCart.movies[id];
    if (user){
        set(ref(db, 'carts/' + user.uid), copyCart);
    }
    setCart(copyCart);
   }

    return (
        <>
            <h1>Your cart:</h1>
            <div className="container">
            {Object.values(cart.movies).map((mov, ind)=> {
                return <Card key={ind} className="text-center">
                    <Card.Header>{mov.data.title}</Card.Header>
                    <div>
                        <Card.Img className="item-img" variant="top" src={mov.data.img_url} />
                    </div>
                    <Card.Body>
                        <Card.Title>{mov.data.price}</Card.Title>
                        <Card.Text>
                            <span><Button className="m-3" variant="secondary" onClick={()=> decreaseItem(mov.data.id)}> - 1 </Button></span>
                            <span className="quan">{mov.quantity}</span>
                            <span><Button className="m-3" variant="info" onClick={() => increaseItem(mov.data.id)}> + 1 </Button></span>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button className="w-25" variant="warning" onClick={()=> removeItem(mov.data.id)}>Remove from cart</Button>
                    </Card.Footer>
                </Card>
            })}
            </div>
            <Link className="btn btn-success" to="/checkout">Checkout</Link>
            <Button variant="danger" onClick={clearCart}>Clear Cart!</Button>
        </>
    )
}
export default Cart;



