import React from "react";
import { useState, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";


const PaymentEntry = () => {
    
    const location = useLocation();
    const navigate = useNavigate();

    const submitForm = (e) => {
        e.preventDefault();
        navigate('/purchase/ShippingEntry', {state: {order: location.state.order}});
    }
    
    const handleInputChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;
        
        switch (name) {
            case 'cardholder':
                location.state.order.card_holder_name = value;
                break;
            case 'creditcard':
                location.state.order.credit_card_number = value;
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
            <h3>
                Enter your payment information:
            </h3>
            <h4>
                Your order:
                <br/>
                Product 1: {location.state.order.buyQuantity[0]} Product 2: {location.state.order.buyQuantity[1]}
            </h4>

            <div>
                <form onSubmit={submitForm}>
                    <label htmlFor="cardholder">Cardholder Name:</label>
                    <input type='text' id="cardholder" name="cardholder" onChange={handleInputChange} required /> <br />

                    <label htmlFor="creditcard">Credit Card Number:</label>
                    <input type='text' id="creditcard" name="creditcard" onChange={handleInputChange} required /> <br />

                    <label htmlFor="expiration">Expiration Date:</label>
                    <input type="text" id="expiration" name="expiration" onChange={handleInputChange} placeholder="MM/YY" required /><br />

                    <label htmlFor="ccv">CVV:</label>
                    <input type="text" id="ccv" name="ccv" onChange={handleInputChange} required /><br /><br />

                    <button type="submit">Next</button>
                </form>
            </div>
        </div>

    );
};

export default PaymentEntry;