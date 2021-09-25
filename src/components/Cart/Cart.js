import React from "react";

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    for (const product of cart) {
        total += product.price;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = total > 150 ? total * 0.1 : 0;
    const grandTotal = total + shipping + tax;

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;
