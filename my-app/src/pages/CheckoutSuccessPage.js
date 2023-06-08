import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckoutSuccessPage.module.css';
import logo from '../images/green-tick.png';

const CheckoutSuccessPage = ({ cartItems }) => {
    const total = cartItems.reduce((accumulator, item) => accumulator + item.price, 0);

    return (
        <div className={styles.checkoutSuccessPage}>
            <h1>Order Successful</h1>
            <p>Your order has been placed successfully.</p>
            <img src={logo} alt="Success" className={styles.successImage} />
            {/* Display cart items and total */}
            {cartItems.map((item) => (
                <div key={item.id} className={styles.card}>
                    <img src={item.imageUrl} alt={item.title} className={styles.productImage} />
                    <div className={styles.productDetails}>
                        <h3 className={styles.productTitle}>{item.title}</h3>
                        <p className={styles.productPrice}>${item.price.toFixed(2)}</p>
                    </div>
                </div>
            ))}
            <div className={styles.total}>Total: ${total.toFixed(2)}</div>
            <Link to="/" className={styles.link}>
                Go back to the store
            </Link>
        </div>
    );
};

export default CheckoutSuccessPage;
