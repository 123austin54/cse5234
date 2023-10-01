import React from "react";
import { useState, useEffect } from "react";
import {useLocation, useNavigate} from "react-router-dom";

const ViewOrder = () => {
    let title = "view order page";
    const location = useLocation();
    const navigate = useNavigate();

    const submitForm = (e) => {
        navigate('/purchase/Confirmation', {state: {order: location.state.order}});
    }

    return (
        <div>
        <h3>
            Your order:
            <br />
            Product 1: {location.state.order.buyQuantity[0]}
            <br />
            Product 2: {location.state.order.buyQuantity[1]}
            <br />
            Credit card number: {location.state.order.credit_card_number}
            <br />
            Address 1: {location.state.order.address_1}
            <br />
            Address 2: {location.state.order.address_2}
            <br />
            City: {location.state.order.city}
            <br />
            State: {location.state.order.state}
            <br />
            Zipcode: {location.state.order.zip}

            <form onSubmit={submitForm}>
            <label htmlFor="Look Good?">Look Good?:</label>
                    <input type="checkbox"
                     required>
                    </input> 
                <button type="submit">Next</button>

            </form>
        </h3>
    </div>
    );
};

export default ViewOrder;