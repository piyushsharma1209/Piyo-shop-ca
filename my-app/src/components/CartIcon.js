import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartIcon.module.css';
import logo from '../images/cart-icon.png';

const CartIcon = ({ count }) => {
    return (
        <div className={styles.cartIcon}>
            <Link to="/checkout">
                <img src={logo} alt="Cart" className={styles.cartImage} />
                {count > 0 && <span className={styles.cartCount}>{count}</span>}
            </Link>
        </div>
    );
};

export default CartIcon;
