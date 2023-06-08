import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import styles from './HomePage.module.css';
import banner from '../images/banner.png';

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.noroff.dev/api/v1/online-shop')
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const featuredProducts = products.slice(0, 4); // Show only 4 featured products

    return (
        <div className={styles.homePage}>
            <div className={styles.banner}>
                <img src={banner} alt="Banner" className={styles.bannerImage} />
            </div>
            <div className={styles.productSection}>
                <h2 className={styles.sectionTitle}>Featured Products</h2>
                <div className={styles.productList}>
                    {featuredProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
                <Link to="/all-products" className={styles.viewAllButton}>
                    View All Products
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
