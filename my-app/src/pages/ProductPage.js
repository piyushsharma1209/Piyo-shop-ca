import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import styles from './ProductPage.module.css';

const ProductPage = ({ handleAddToCart }) => {
    const { id } = useParams();
    const history = useHistory();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios
            .get(`https://api.noroff.dev/api/v1/online-shop/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
            });
    }, [id]);

    const addToCart = () => {
        handleAddToCart(product);
        history.push('/checkout');
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.productPage}>
            <div className={styles.productCard}>
                <img src={product.imageUrl} alt={product.title} className={styles.productImage} />
                <div className={styles.productInfo}>
                    <h2 className={styles.productTitle}>{product.title}</h2>
                    <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
                </div>
            </div>
            <p className={styles.productDescription}>{product.description}</p>
            <button className={styles.addToCartButton} onClick={addToCart}>
                Add to Cart
            </button>
        </div>
    );
};

export default ProductPage;
