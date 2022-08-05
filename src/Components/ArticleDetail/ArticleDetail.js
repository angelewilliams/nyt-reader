import React from "react";


const ArticleDetail = ({ currentArticle }) => {
    console.log(currentArticle)
    return (
        <div className="article-detail">
            <p className="section-tag">{currentArticle.section}</p>
            <h2 className="title">{currentArticle.subsection}</h2>
            <h4>{currentArticle.abstract}</h4>
            <h5>{currentArticle.byline}</h5>
            <a href={currentArticle.url} target="_blank">Link to full currentArticle on NYTimes.com</a>
            <img src={currentArticle.multimedia[0].url} alt={currentArticle.multimedia[0].caption} />
        </div>
    )
}

export default ArticleDetail