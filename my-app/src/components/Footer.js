import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.quickLinks}>
                <Link to="/" className={styles.link}>
                    Home
                </Link>
                <Link to="/contact" className={styles.link}>
                    Contact
                </Link>
                <Link to="/about" className={styles.link}>
                    About
                </Link>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} - Piyu Co
            </div>
        </footer>
    );
};

export default Footer;
