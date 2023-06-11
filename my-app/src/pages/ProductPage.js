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

    const { title, imageUrl, price, discountedPrice, description, reviews } = product;

    const discount = price - discountedPrice;

    return (
        <div className={styles.productPage}>
            <div className={styles.productCard}>
                <img src={imageUrl} alt={title} className={styles.productImage} />
                <div className={styles.productInfo}>
                    <h2 className={styles.productTitle}>{title}</h2>
                    <p className={styles.productPrice}>
                        {discountedPrice !== price ? (
                            <span>
                                <span className={styles.discountedPrice}>${discountedPrice.toFixed(2)}</span>{' '}
                                <span className={styles.originalPrice}>${price.toFixed(2)}</span>
                                <span className={styles.discount}>-{(discount / price * 100).toFixed(0)}%</span>
                            </span>
                        ) : (
                            <span>${price.toFixed(2)}</span>
                        )}
                    </p>
                </div>
            </div>
            <p className={styles.productDescription}>{description}</p>
            <button className={styles.addToCartButton} onClick={addToCart}>
                Add to Cart
            </button>

            {reviews.length > 0 && (
                <div className={styles.reviews}>
                    <h3>Reviews</h3>
                    <ul>
                        {reviews.map((review) => (
                            <li key={review.id}>
                                <p>{review.username}</p>
                                <p>{review.description}</p>
                                <p>Rating: {review.rating}/5</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ProductPage;
