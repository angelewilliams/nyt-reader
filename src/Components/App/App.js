import React, { useEffect, useState } from 'react';
import logo from '../../logo.png';
import './App.css';
import Nav from '../Nav/Nav';
import Articles from '../Articles/Articles';
import ArticleDetail from '../ArticleDetail/ArticleDetail';
import fetchData from '../../apiCalls';
import { placeholderData } from '../../Assets/data';
import LoadingSpinner from '../Loading/LoadingSpinner';
import { Route, Switch, Redirect } from 'react-router-dom';


const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [sectionTag, setSectionTag] = useState('arts');
  const [currentArticle, setCurrentArticle] = useState({});


  const handleFetch = () => {
    setIsLoading(true);
    fetchData(sectionTag)
      .then(data => {
        console.log(data.results)
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
    // setArticles(placeholderData)

  }, [sectionTag]);

  return (
    <div className="App">
      <Nav setArticles={setArticles} setSectionTag={setSectionTag} setIsLoading={setIsLoading} />
      <Switch>
        <Route
          exact path="/nyt-reader/"
          render={() =>
            <main>
              {isLoading ? <LoadingSpinner /> : <Articles articles={articles} currentArticle={currentArticle} setCurrentArticle={setCurrentArticle} />}
            </main>
          }
        />
        {/* Need to display   */}
        <Route
          exact path="/nyt-reader/:article"
          render={({ match }) => {
            const article = parseInt(match.params.article)
            return (
              <div>
                <ArticleDetail currentArticle={currentArticle} />
\              </div>)
          }}
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



  // const [categoryText, setCategoryText] = useState('home');
