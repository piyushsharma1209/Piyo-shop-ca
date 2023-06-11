import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} - Piyo&Co
            </div>
        </footer>
    );
};

export default Footer;
