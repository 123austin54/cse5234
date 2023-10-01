import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShippingEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        e.preventDefault();

        const {name, value} = e.target;
        
        switch (name) {
            case 'address1':
                location.state.order.address_1 = value;
                break;
            case 'address2':
                location.state.order.address_2 = value;
                break;
            case 'city':
                location.state.order.city = value;
                break;
            case 'state':
                location.state.order.state = value;
                break;
            case 'zip':
                location.state.order.zip = value;
                break;
            default:
                break;
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        navigate('/purchase/ViewOrder', {state: {order: location.state.order}});
    }

    return (
        <div>
            <h1>
                Enter your shipping information:

            </h1>
            <h2>
                Your order:
                <br />
                Product 1: {location.state.order.buyQuantity[0]}
                <br />
                Product 2: {location.state.order.buyQuantity[1]}
                <br />
            </h2>

            <div>
                <form onSubmit={submitForm}>
                    <label htmlFor="address1">Address line 1</label>
                    <input type='text' id="address1" name="address1" onChange={handleInputChange} required /> <br /><br />

                    <label htmlFor="address2">Address line 2</label>
                    <input type='text' id="address2" name="address2" onChange={handleInputChange} /> <br /><br />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" onChange={handleInputChange} required /><br /><br />

                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" onChange={handleInputChange} required /><br /><br />

                    <label htmlFor="zip">Zipcode</label>
                    <input type="text" id="zip" name="zip" onChange={handleInputChange} required /><br /><br />

                    <button type="submit">Next</button>
                </form>
            </div>
        </div>
    );
};

export default ShippingEntry;