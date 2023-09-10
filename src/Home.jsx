import React from 'react';
import './App.css';
import './mediaqueries.css';
import Contact from './Components/Contact';
import Profile from './Components/Profile';
import Cards from './Components/Cards';

function Home() {
  
  return (
    <div className="App">
      <Profile /> 
      <Cards /> 
      <Contact /> 
      
    </div>
  );
}

export default Home;