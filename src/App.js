import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import ContactPage from './pages/Contact.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import ProductPage from './pages/Product.js';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <IndexPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/product">
            <ProductPage />
          </Route>
        </Switch>
    </Router>
  );
}
