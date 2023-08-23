import React from 'react';
import './App.css';
import './mediaqueries.css';
import Header from './Components/Header';
import Profile from './Components/Profile';
import About from './Components/About';
import Experiences from './Components/Experiences';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Profile /> 
      <About /> 
      <Experiences /> 
      <Projects /> 
      <Contact /> 
      <Footer /> 
    </div>
  );
}

export default App;
