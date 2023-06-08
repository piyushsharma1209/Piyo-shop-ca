import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            <CartIcon count={3} />
        </header>
    );
};

const CartIcon = ({ count }) => {
    return (
        <div className="cart-icon">
            <img src="/path/to/cart-icon.png" alt="Cart" />
            {count > 0 && <div className="cart-overlay">{count}</div>}
        </div>
    );
};

export default Header;