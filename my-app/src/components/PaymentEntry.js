import React from "react";
import { useState, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";


const PaymentEntry = () => {
    
    const location = useLocation();
    const navigate = useNavigate();

    const submitForm = (e) => {
        navigate('/purchase/ShippingEntry', {state: {order: location.state.order}});
    }
    location.state.order.buyQuantity[0] -= 1;
    const handleInputChange = (e) => {
        const {name, value} = e.target;

        switch (name) {
            case 'cardholder':
                location.state.order.card_holder_name = value;
                console.log("card holder");
                break;
            case 'creditcard':
                location.state.order.credit_card_numer = value;
                break;
            case 'expiration':
                location.state.order.expir_date = value;
                break;
            case 'ccv':
                location.state.order.ccvCode = value;
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <h1>
                Enter your payment information:
            </h1>
            <h2>
                Your order:
                <br />
                Product 1: {location.state.order.buyQuantity[0]}
                <br />
                Product 2: {location.state.order.buyQuantity[1]}
            </h2>

            <div>
                <form onSubmit={submitForm}>
                    <label htmlFor="cardholder">Cardholder Name:</label>
                    <input type='text' id="cardholder" required /> <br /><br />

                    <label htmlFor="creditcard">Credit Card Number:</label>
                    <input type='text' id="creditcard" required /> <br /><br />

                    <label htmlFor="expiration">Expiration Date:</label>
                    <input type="text" id="expiration" name="expiration" placeholder="MM/YY" required /><br /><br />

                    <label htmlFor="cvv">CVV:</label>
                    <input type="text" id="cvv" name="cvv" required /><br /><br />

                    <button type="submit">Next</button>
                </form>
            </div>
        </div>

    );
};

export default PaymentEntry;