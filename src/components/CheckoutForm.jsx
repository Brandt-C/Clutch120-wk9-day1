import React, { useEffect, useState } from "react";
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

import '../css/stripe.css'


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    /*
    The flow/process:
    1. create payment intent (starts with cart going to flask)
    2. if loaded submit payment info
    3. processing of payment (through stripe api)
    4. show status of payment
    5. show confirmation/message  && clear cart
    */

    const [showPay, setShowPay] = useState(true);
    const [showForm, setShowForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const handlePay = async (event) => {
        event.preventDefault();
        setShowPay(false); // disable form submission
        const data = await stripe.confirmPayment({
            elements,
            redirect : 'if_required'
        });
        console.log('pay intent received: ', data);
        // probably where we'll clear the cart
        if (data['error']) {
            console.log(data['error']['code']);
            setErrorMessage(data['error']['message']);
            setShowForm('error');
        } else {
            setShowForm(false);
        }
    }

    return (
        <div className="container" >

            {
                showForm === true ?
                <form id="payment-form" onSubmit={handlePay}>
                <PaymentElement id="payment-element"></PaymentElement>
                <button disabled={ !showPay || !elements || !stripe} id="submit" >
                <span id="button-text">
                {showPay ? " Submit Payment" : 'Processing. . . '}
                </span>
                </button>
                </form>
                :
                showForm === 'error' ?
                <>
                <h4>Something went wrong with processing your payment, please try again!</h4>
                <h4>{errorMessage}</h4>
                </>
                :
                <h2>Payment success, thanks for all the fish!!!</h2>
            }
      </div>
    )
}
export default CheckoutForm