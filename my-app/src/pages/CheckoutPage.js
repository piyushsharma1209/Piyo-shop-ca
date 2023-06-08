import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckoutPage.module.css';

const CheckoutPage = ({ cartItems, handleRemoveFromCart }) => {
    const total = cartItems.reduce((accumulator, item) => accumulator + item.price, 0);

    const handleRemove = (itemId) => {
        handleRemoveFromCart(itemId);
    };

    const formatPrice = (price) => {
        return price.toFixed(2);
    };

    return (
        <div className={styles.checkoutPage}>
            <h1>Checkout</h1>
            {/* Display cart items and total */}
            {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                    <div className={styles.productCard}>
                        <img src={item.imageUrl} alt={item.title} className={styles.productImage} />
                        <div className={styles.productInfo}>
                            <h3 className={styles.productTitle}>{item.title}</h3>
                            <span className={styles.productPrice}>${formatPrice(item.price)}</span>
                        </div>
                    </div>
                    <button className={styles.removeButton} onClick={() => handleRemove(item.id)}>
                        Remove
                    </button>
                </div>
            ))}
            <div className={styles.total}>Total: ${formatPrice(total)}</div>
            <Link to="/checkout-success" className={styles.checkoutButton}>
                Checkout
            </Link>
        </div>
    );
};

export default CheckoutPage;
