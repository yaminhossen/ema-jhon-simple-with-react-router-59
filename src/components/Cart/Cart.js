import React from 'react';
import './Cart.css'

const Cart = ({ cart, children }) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grand = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order summary</h4>
            <p>Selected items:{cart.length}</p>
            <p>Total price:${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:{tax}</p>
            <h4>Grand Total:${grand.toFixed(2)}</h4>
            {children}
        </div>
    );
};

export default Cart;