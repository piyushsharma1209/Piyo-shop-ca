import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import AllProductsPage from './pages/AllProductsPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <Router>
      <div className="app">
        <Header cartItemsCount={cartItems.length} />
        <div className="content">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route
              path="/products"
              render={(props) => (
                <AllProductsPage
                  {...props}
                  handleAddToCart={handleAddToCart}
                  cartItems={cartItems}
                />
              )}
            />
            <Route
              path="/product/:id"
              render={(props) => (
                <ProductPage
                  {...props}
                  handleAddToCart={handleAddToCart}
                  cartItems={cartItems}
                />
              )}
            />
            <Route
              path="/checkout"
              render={(props) => (
                <CheckoutPage
                  {...props}
                  cartItems={cartItems}
                  handleRemoveFromCart={handleRemoveFromCart}
                />
              )}
            />
            <Route
              path="/checkout-success"
              render={(props) => (
                <CheckoutSuccessPage {...props} cartItems={cartItems} />
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
