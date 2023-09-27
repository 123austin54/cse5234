import React from "react";
import { useEffect, useState } from "react-router-dom";
import {useLocation, useNavigate} from "react-router-dom";


const PaymentEntry = () => {
    
    const location = useLocation();
    
    return (
        <div>
            <h1>
                Product 1 {location.state.order.buyQuantity[0]}
                Product 2 {location.state.order.buyQuantity[1]}
            </h1>
        </div>
    );
};

export default PaymentEntry;