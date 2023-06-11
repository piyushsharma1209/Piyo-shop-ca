import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import styles from './HomePage.module.css';

const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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

    useEffect(() => {
        if (searchQuery) {
            const filteredProducts = products.filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setSearchResults(filteredProducts);
        } else {
            setSearchResults([]);
        }
    }, [searchQuery, products]);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const renderProducts = () => {
        if (searchQuery) {
            if (searchResults.length === 0) {
                return <p>No results found.</p>;
            }
            return (
                <div className={styles.productList}>
                    {searchResults.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            );
        } else {
            const featuredProducts = products.slice(0, 4);
            return (
                <div className={styles.productList}>
                    {featuredProducts.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </div>
            );
        }
    };

    return (
        <div className={styles.homePage}>
            <div className={styles.productSection}>
                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                    />
                </div>
                <h2 className={styles.sectionTitle}>Featured Products</h2>
                {renderProducts()}
                {searchQuery && (
                    <p className={styles.searchInfo}>
                        Showing results for "{searchQuery}"
                    </p>
                )}
                {!searchQuery && (
                    <Link to="/products" className={styles.viewAllButton}>
                        View All Products
                    </Link>
                )}
            </div>
        </div>
    );
};

export default HomePage;
