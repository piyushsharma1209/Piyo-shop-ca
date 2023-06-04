import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ProductPage.module.css';

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://api.noroff.dev/api/v1/online-shop/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.productPage}>
            <img src={product.image} alt={product.title} className={styles.productImage} />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <button className={styles.addToCartButton}>Add to Cart</button>
        </div>
    );
};

export default ProductPage;
