import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

const Product = ({ product }) => {
    const { title, imageUrl, price, discountedPrice } = product;

    const hasDiscount = price !== discountedPrice;
    const discountPercentage = Math.round(((price - discountedPrice) / price) * 100);

    return (
        <div className={styles.productCard}>
            <img src={imageUrl} alt={title} className={styles.productImage} />
            <h2 className={styles.productTitle}>{title}</h2>
            {hasDiscount && (
                <p className={styles.productPrice}>
                    <span className={styles.originalPrice}>${price}</span>
                    ${discountedPrice}
                    <span className={styles.discount}>{discountPercentage}% off</span>
                </p>
            )}
            {!hasDiscount && <p className={styles.productPrice}>${price}</p>}
            <Link to={`/product/${product.id}`} className={styles.viewProductButton}>
                View Product
            </Link>
        </div>
    );
};

export default Product;
