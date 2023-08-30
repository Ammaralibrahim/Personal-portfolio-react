import React from 'react';
import './App.css';
import './mediaqueries.css';
import Header from './Components/Header';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Profile from './Components/Profile';
import Cards from './Components/Cards';

function App() {
  
  return (
    <div className="App">
      <Header /> 
      <Profile /> 
      <Cards /> 
      <Contact /> 
      <Footer /> 
      
    </div>
  );
}

export default App;
