import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckoutSuccessPage.module.css';
import logo from '../images/green-tick.png';

const CheckoutSuccessPage = ({ cartItems }) => {
    const total = cartItems.reduce(
        (accumulator, item) =>
            item.discountedPrice && item.discountedPrice < item.price
                ? accumulator + item.discountedPrice * item.quantity
                : accumulator + item.price * item.quantity,
        0
    );

    return (
        <div className={styles.checkoutSuccessPage}>
            <h1>Order Successful</h1>
            <p>Your order has been placed successfully.</p>
            <img src={logo} alt="Success" className={styles.successImage} />
            {cartItems.map((item) => (
                <div key={item.id} className={styles.card}>
                    <img src={item.imageUrl} alt={item.title} className={styles.productImage} />
                    <div className={styles.productDetails}>
                        <h3 className={styles.productTitle}>{item.title}</h3>
                        <span className={styles.productPrice}>
                            ${item.discountedPrice && item.discountedPrice < item.price
                                ? item.discountedPrice
                                : item.price}
                        </span>
                        <span className={styles.productQuantity}>Quantity: {item.quantity}</span>
                    </div>
                </div>
            ))}
            <div className={styles.total}>Total: ${total.toFixed(2)}</div>
            <Link to="/products" className={styles.continueShoppingButton}>
                Continue Shopping
            </Link>
        </div>
    );
};

export default CheckoutSuccessPage;
