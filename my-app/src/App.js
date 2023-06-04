import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductPage from './pages/ProductPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/checkout-success" component={CheckoutSuccessPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
