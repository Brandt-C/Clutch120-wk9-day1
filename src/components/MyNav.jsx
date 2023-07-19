import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import '../css/nav.css'
import { useAuth, useDatabase, useSigninCheck, useUser } from "reactfire";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Button } from "react-bootstrap";
import { get, ref, child } from "firebase/database";


function MyNav() {
    // useEffect(()=>{console.log('NAVbar component state has been rendered or re-rendered')});
    const { cart, setCart } = useContext(DataContext);

    const auth = useAuth();
    const { data:user } = useUser();
    const { signinStatus } = useSigninCheck();   //---> this returns a boolean whether a user is signed in or not
    const db = useDatabase();

    const signin = async () => {
        let provider = new GoogleAuthProvider();
        let u = await signInWithPopup(auth, provider);
        console.log(u);
    }
    const signout = async () => {
        await signOut(auth).then(() => console.log('user has been signed out'));
    }
    /* Tasks for conditional nav auth handling:
    1. user is signed in--> name + signout button
    2. no user/signed out
    3. popup has been triggered but . . . 
    
    */
    useEffect(()=> {
        if (user){
            get(child(ref(db), `carts/${user.uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                  console.log(snapshot.val());
                  setCart(snapshot.val());
                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
        } else {
            setCart({size:0, total:0, movies:{}})
        }
    },[user])


    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Link className="navbar-brand" to="/shop">shop</Link>
                        <Link className="navbar-brand" to="/">home</Link>
                        {
                            signinStatus === 'loading'?
                            <Button variant="info" disabled>LLLLllllllloooooooooooaaaaaaaaaaading . . . </Button> :
                            user ?
                            <>
                            <span>{user.displayName}</span>
                            <Button variant="info" onClick={signout}>Log Out</Button>
                            </> :
                            <Button variant="info" onClick={signin}> Log in</Button>
                        }
                        

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