import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShippingEntry = () => {
    let title = "shipping entry page";
    const location = useLocation();
    console.log(location.state.order);
    return (
        <div>
            <h1>
                {title}
            </h1>
        </div>
    );
};

export default ShippingEntry;