import { useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { DataContext } from "../context/DataProvider";
import CheckoutForm from "../components/CheckoutForm";
import { useUser } from "reactfire";


const stripePromise = loadStripe("pk_test_51Mwqk4IN4ycAWb6GswJCgwXGBvRuIoNayp1EvkDSCVRVb7LnhuvSG3DiCSAsAAY1le1N3KVdUo3YlZA40r5mPWoG002YL5MQbu");

const Checkout = () => {
    const [clientSecret, setClientSecret] = useState("");
    const {cart, setCart} = useContext(DataContext);
    const {data:user} = useUser();

    useEffect(() => {
        // if (!cart.size || cart.size === 0){
        //     return
        // }
        console.log(cart);
        fetch('http://127.0.0.1:5000/pay/create-payment-intent', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({'cart':cart, 'user': user}),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    )
}
export default Checkout;