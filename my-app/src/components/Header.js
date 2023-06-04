import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.nav}>
                    <li><Link to="/" className={styles.navLink}>Home</Link></li>
                    <li><Link to="/contact" className={styles.navLink}>Contact</Link></li>
                </ul>
            </nav>
            <CartIcon />
        </header>
    );
};

export default Header;
