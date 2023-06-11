import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CheckoutPage.module.css';

const CheckoutPage = ({ cartItems, handleRemoveFromCart, handleUpdateQuantity }) => {
    const [quantity, setQuantity] = useState({});

    const handleQuantityChange = (itemId, value) => {
        setQuantity((prevState) => ({
            ...prevState,
            [itemId]: value,
        }));
    };

    const formatPrice = (price) => {
        return price.toFixed(2);
    };

    const total = cartItems.reduce(
        (accumulator, item) =>
            item.discountedPrice && item.discountedPrice < item.price
                ? accumulator + item.discountedPrice * (quantity[item.id] || item.quantity)
                : accumulator + item.price * (quantity[item.id] || item.quantity),
        0
    );

    const handleRemove = (itemId) => {
        handleRemoveFromCart(itemId);
    };

    return (
        <div className={styles.checkoutPage}>
            {cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                    <div className={styles.productCard}>
                        <img src={item.imageUrl} alt={item.title} className={styles.productImage} />
                        <div className={styles.productInfo}>
                            <h3 className={styles.productTitle}>{item.title}</h3>
                            <span className={styles.productPrice}>
                                ${item.discountedPrice && item.discountedPrice < item.price ? item.discountedPrice : item.price}
                            </span>
                            <div>
                                Quantity:{' '}
                                <input
                                    type="number"
                                    min={1}
                                    value={quantity[item.id] || item.quantity}
                                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                    className={styles.quantityInput}
                                />
                            </div>
                            <span className={styles.productTotalPrice}>
                                Total: $
                                {formatPrice(
                                    item.discountedPrice && item.discountedPrice < item.price
                                        ? item.discountedPrice * (quantity[item.id] || item.quantity)
                                        : item.price * (quantity[item.id] || item.quantity)
                                )}
                            </span>
                        </div>
                    </div>
                    <button className={styles.removeButton} onClick={() => handleRemove(item.id)}>
                        Remove
                    </button>
                </div>
            ))}
            <div className={styles.total}>Total: ${formatPrice(total)}</div>
            {cartItems.length > 0 ? (
                <div>
                    <button className={styles.updateButton} onClick={() => handleUpdateQuantity(quantity)}>
                        Update Cart
                    </button>
                    <Link to="/checkout-success" className={styles.checkoutButton}>
                        Checkout
                    </Link>
                </div>
            ) : (
                <div className={styles.emptyCartMessage}>Your cart is empty.</div>
            )}
        </div>
    );
};

export default CheckoutPage;
