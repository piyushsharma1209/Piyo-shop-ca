import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://api.noroff.dev/api/v1/online-shop')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className={styles.homePage}>
            <h1>Our Products</h1>
            <div className={styles.productList}>
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
