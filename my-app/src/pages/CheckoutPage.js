import React from 'react';
import styles from './CheckoutPage.module.css';

const CheckoutPage = () => {
    return (
        <div className={styles.checkoutPage}>
            <h1>Checkout</h1>
            {/* Display cart items and total */}
            <button className={styles.checkoutButton}>Checkout</button>
        </div>
    );
};

export default CheckoutPage;
