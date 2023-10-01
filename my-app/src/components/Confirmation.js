import React from "react";
import {useLocation} from "react-router-dom";

const Confirmation = () => {
    
    let title = "confirmation page";
    
    const location = useLocation();

    
        return (
        <div>
            <h1>{title}</h1>
            <h2>
                Your order:
                <br />
                Product 1: {location.state.order.buyQuantity[0]}
                <br />
                Product 2: {location.state.order.buyQuantity[1]}
                <br />
                Thank you for your business!
                <br />
                Confirmation Number: 9935
            </h2>
        </div>
    );
};

export default Confirmation;