import React from 'react';
import { useState } from 'react';
import logo from '../../logo.png';
import './App.css';
import Nav from '../Nav/Nav';
import Articles from '../Articles/Articles';

const App = () => {
  const [topstories, useTopStories] = useState([])
  const [isLoading, setIsLoading] = useState(false);


  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Articles />

      </header>
    </div>
  );
}

export default App;
