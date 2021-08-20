import React from 'react';
import {Link} from 'react-router-dom';
const Basket = (props) => {
    const {cartItems,onAdd, onRemove,signin} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const taxPrice =  itemsPrice *.1;
    const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return(
        <div className="row">
            <Link to="/">back to shopping</Link>
        <aside className=" col-md-4 offset-md-4 mt-5">
            <h1>Cart Items</h1>
            <div>
                {cartItems.length ===0 && <div>Cart is empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="col-2 text-right">
                        {item.qty} x ${item.price}
                    </div>
                </div>
            ))}
        {cartItems.length !== 0 && (
            <>
            <hr />
            <div className="row lh-lg">
                <div className="col-2">Items Price</div>
                <div className="col-1 text-right">${itemsPrice}</div>
            </div>
            <div className="row">
                <div className="col-2">Tax</div>
                <div className="col-1 text-right">${taxPrice}</div>
            </div>
            <div className="row">
                <div className="col-2">Shipping</div>
                <div className="col-1 text-right">${shippingPrice}</div>
            </div>
            <div className="row">
                <div className="col-2">Total Price</div>
                <div className="col-1 text-right">${totalPrice}</div>
            </div>
            <hr />
            <div className="row">
                <button onClick={() => { 
                    if(signin)
                            {
                                alert('You order has been placed');
                            }
                    else {
                        alert('You are not signed in')
                    }
                    } } className="btn">Checkout</button>
            </div>
            </>
        )}
        </aside>
        </div>
    )
} 

export default Basket;