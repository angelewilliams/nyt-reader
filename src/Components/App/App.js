import React, { useEffect, useState } from 'react';
import logo from '../../logo.png';
import './App.css';
import Nav from '../Nav/Nav';
import Articles from '../Articles/Articles';
import fetchData from '../../apiCalls';
import { placeholderData } from '../../Assets/data';
import LoadingSpinner from '../Loading/LoadingSpinner';

const App = () => {
  const [topstories, setTopStories] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = () => {
    // setIsLoading(true);
    // fetchData("home")
    //   .then(data => { 
    //      setTopStories(data.results)
    //      setIsLoading(false)

    //    })
    //   .catch(err => {
    //     console.error(err);
    //      setIsLoading(false)
    //   });
  };



  useEffect(() => {
    //handleFetch()
    setTopStories(placeholderData)

  }, []);

  return (
    <div className="App">
      <Nav />
      <main>
        <img src={logo} className="App-logo" alt="logo" />
        {isLoading ? <LoadingSpinner /> : <Articles articles={topstories} />}
      </main>
    </div>
  );
}

export default App;
