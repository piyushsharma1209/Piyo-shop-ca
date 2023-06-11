import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';
import styles from './Header.module.css';
import logo from '../images/logo.png';

const Header = ({ cartItemsCount }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <Link to="/" className={styles.logoLink}>
                    <img src={logo} alt="Logo" className={styles.logo} />
                </Link>
            </div>
            <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`} onClick={closeMenu}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link to="/" className={styles.navLink}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/products" className={styles.navLink}>
                            Products
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to="/contact" className={styles.navLink}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <CartIcon count={cartItemsCount} />
        </header>
    );
};

export default Header;
