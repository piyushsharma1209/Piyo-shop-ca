import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckoutSuccessPage.module.css';

const CheckoutSuccessPage = () => {
    return (
        <div className={styles.checkoutSuccessPage}>
            <h1>Order Successful</h1>
            <p>Your order has been placed successfully.</p>
            <Link to="/" className={styles.link}>Go back to the store</Link>
        </div>
    );
};

export default CheckoutSuccessPage;
