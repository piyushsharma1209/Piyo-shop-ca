import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Product.module.css';

const Product = ({ product }) => {
    return (
        <div className={styles.productCard}>
            <img src={product.imageUrl} alt={product.title} className={styles.productImage} />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productPrice}>${product.price}</p>
            <Link to={`/product/${product.id}`} className={styles.viewProductButton}>View Product</Link>
        </div>
    );
};

export default Product;
