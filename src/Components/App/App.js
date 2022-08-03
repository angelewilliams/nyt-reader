import React, { useEffect, useState } from 'react';
import logo from '../../logo.png';
import './App.css';
import Nav from '../Nav/Nav';
import Articles from '../Articles/Articles';
import fetchData from '../../apiCalls';
import { placeholderData } from '../../Assets/data';
import LoadingSpinner from '../Loading/LoadingSpinner';
import { Route, Switch, Redirect } from 'react-router-dom';


const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [sectionTag, setSectionTag] = useState('arts');
  // const [categoryText, setCategoryText] = useState('home');
  const [currentArticle, setCurrentArticle] = useState({});


  const handleFetch = () => {
    setIsLoading(true);
    fetchData(sectionTag)
      .then(data => { 
         setArticles(data.results)
         setIsLoading(false)

       })
      .catch(err => {
        console.error(err);
         setIsLoading(false)
      });
  }



  useEffect(() => {
    handleFetch()
    // setIsLoading(true)
    // setTopStories(placeholderData)

  }, []);

  return (
    <div className="App">
      <Nav sectionTag={sectionTag} setSectionTag={setSectionTag}/>
      <Switch>
        <Rout
          exact path="/nyt-reader/"
          render={() =>
            <main>
              {isLoading ? <LoadingSpinner /> : <Articles articles={articles} />}
            </main>
          }
        />
        {/* <Route
          exact path="/nyt-reader/:article"
          render={({ match }) => {
            const article = parseInt(match.params.article)
            return <Articles articles={article} />
          }}
        /> */}

        <Route
          exact path="/nyt-reader/spinner"
          render={() => <img src={logo} className="App-logo" alt="logo" />
          }
        />
        <Route
          exact path="/nyt-reader/spinner"
          render={() => <img src={logo} className="App-logo" alt="logo" />
          }
        />

        <Route exact path="/">
          <Redirect to="/nyt-reader/" />
        </Route>

      </Switch>


    </div>
  );
}

export default App;
