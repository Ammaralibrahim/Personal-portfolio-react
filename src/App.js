import React from 'react';
import './App.css';
import './mediaqueries.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ProductList from './productList';
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product-list"  component={ProductList} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
